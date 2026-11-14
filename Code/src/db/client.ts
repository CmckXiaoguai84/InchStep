/**
 * SQLite 连接与初始化（唯一入口）。
 * _layout 在建表门禁里 await initDatabase()，之后全 App 用 getDb()。
 */

import * as SQLite from 'expo-sqlite';

import { migrate } from './migrations';
import { SCHEMA_VERSION } from './schema';

export const DB_NAME = 'ruanjin.db';

let connection: SQLite.SQLiteDatabase | null = null;
let initPromise: Promise<SQLite.SQLiteDatabase> | null = null;

export function getDb(): SQLite.SQLiteDatabase {
  if (!connection) {
    throw new Error('数据库尚未初始化：请先 await initDatabase()');
  }
  return connection;
}

/** 幂等：并发调用共享同一个 Promise，失败后允许重试 */
export function initDatabase(): Promise<SQLite.SQLiteDatabase> {
  if (!initPromise) {
    initPromise = bootstrap().catch((error: unknown) => {
      initPromise = null;
      throw error;
    });
  }
  return initPromise;
}

async function bootstrap(): Promise<SQLite.SQLiteDatabase> {
  const db = SQLite.openDatabaseSync(DB_NAME);

  await db.execAsync('PRAGMA journal_mode = WAL;');
  await db.execAsync('PRAGMA foreign_keys = ON;');

  const version = await migrate(db);
  if (version !== SCHEMA_VERSION) {
    throw new Error(`数据库版本异常：期望 ${SCHEMA_VERSION}，实际 ${version}`);
  }

  connection = db;
  return db;
}

export async function closeDatabase(): Promise<void> {
  if (!connection) return;
  await connection.closeAsync();
  connection = null;
  initPromise = null;
}
