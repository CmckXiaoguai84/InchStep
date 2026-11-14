/**
 * 建表后的默认数据（幂等，全部 INSERT OR IGNORE）：
 * 1) settings 单行（id = 1）
 * 2) mascot_profile 单形象 + 三组默认话术（D10：V1 只有一个吉祥物）
 * 话术为本地模板，变量用 {task}/{percent}/{streak} 占位，由 mascot-copy 填充。
 */

import type { SQLiteDatabase } from 'expo-sqlite';

import { currentTimeZone, toIso } from '@/lib/time';

export const DEFAULT_MASCOT_ID = 'mascot_default';

export const DEFAULT_MASCOT = {
  name: '小蜗',
  avatar: '🐌',
  tone: 'gentle',
  linesDaily: [
    '今天也慢慢来，先做一件就好。',
    '{task} 排在今天，不用急，到了我叫你。',
    '不赶时间，能开始就已经在走了。',
  ],
  linesComfort: [
    '完成了 {percent}% 也算数，剩下的留给下次。',
    '这一步没走完，不说明你不行。',
    '今天有点难，先照顾自己。',
  ],
  linesPraise: [
    '{task} 做完了，稳稳的。',
    '今天这件事你做到了，记下来。',
    '连续 {streak} 天，慢慢来也很快。',
  ],
} as const;

export async function seedDefaults(db: SQLiteDatabase): Promise<void> {
  const now = toIso(Date.now());

  await db.runAsync(
    `INSERT OR IGNORE INTO settings (id, active_timezone, updated_at)
     VALUES (1, ?, ?)`,
    [currentTimeZone(), now],
  );

  await db.runAsync(
    `INSERT OR IGNORE INTO mascot_profile
       (id, name, avatar, tone, lines_daily, lines_comfort, lines_praise, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      DEFAULT_MASCOT_ID,
      DEFAULT_MASCOT.name,
      DEFAULT_MASCOT.avatar,
      DEFAULT_MASCOT.tone,
      JSON.stringify(DEFAULT_MASCOT.linesDaily),
      JSON.stringify(DEFAULT_MASCOT.linesComfort),
      JSON.stringify(DEFAULT_MASCOT.linesPraise),
      now,
      now,
    ],
  );
}
