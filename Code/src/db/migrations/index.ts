/**
 * 迁移执行器：以 PRAGMA user_version 为游标，逐版本在事务内执行。
 * 迁移文件只增不改；已发布版本禁止修改 DDL。
 */

import type { SQLiteDatabase } from 'expo-sqlite';

import { migration001 } from './001_init';
import type { Migration } from './types';

export type { Migration } from './types';

export const MIGRATIONS: Migration[] = [migration001].sort((a, b) => a.version - b.version);

export async function readUserVersion(db: SQLiteDatabase): Promise<number> {
  const row = await db.getFirstAsync<{ user_version: number }>('PRAGMA user_version');
  return row?.user_version ?? 0;
}

/** 返回执行后的 schema 版本 */
export async function migrate(db: SQLiteDatabase): Promise<number> {
  let current = await readUserVersion(db);

  for (const migration of MIGRATIONS) {
    if (migration.version <= current) continue;

    await db.withTransactionAsync(async () => {
      await migration.up(db);
      // PRAGMA 不支持参数绑定，version 来自本地常量，安全
      await db.execAsync(`PRAGMA user_version = ${migration.version}`);
    });

    current = migration.version;
  }

  return current;
}
