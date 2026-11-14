import type { SQLiteDatabase } from 'expo-sqlite';

export type Migration = {
  /** 单调递增，写入 PRAGMA user_version */
  version: number;
  /** 在事务内执行；不要自己开事务 */
  up: (db: SQLiteDatabase) => Promise<void>;
};
