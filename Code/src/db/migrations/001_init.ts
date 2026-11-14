import { INIT_DDL } from '@/db/schema';
import { seedDefaults } from '@/db/seed';

import type { Migration } from './types';

/**
 * v1 初始化：建六张表 + 索引，随后写入默认 settings 与吉祥物。
 * 全部在 migrate() 开的事务内，失败则整体回滚（含 user_version）。
 */
export const migration001: Migration = {
  version: 1,
  async up(db) {
    await db.execAsync(INIT_DDL);
    await seedDefaults(db);
  },
};
