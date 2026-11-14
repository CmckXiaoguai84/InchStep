/**
 * schema v1：六张表 + 索引，与 plan.md §三 一一对应。
 * 已发布后禁止修改本文件，只新增 migrations/00N_*.ts。
 */

export const SCHEMA_VERSION = 1;

export const TABLE_NAMES = [
  'task',
  'task_occurrence',
  'reminder_record',
  'completion',
  'mascot_profile',
  'settings',
] as const;

export type TableName = (typeof TABLE_NAMES)[number];

export const INIT_DDL = `
CREATE TABLE IF NOT EXISTS task (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  "desc" TEXT,
  category TEXT NOT NULL DEFAULT 'ad_hoc'
    CHECK (category IN ('ad_hoc','time_block','habit','routine')),
  quadrant INTEGER CHECK (quadrant BETWEEN 1 AND 4),
  repeat_rule TEXT,
  time_mode TEXT NOT NULL DEFAULT 'duration'
    CHECK (time_mode IN ('duration','at_time','window')),
  structure TEXT,
  start_time TEXT,
  end_time TEXT,
  duration_min INTEGER,
  reminder_time TEXT,
  base_difficulty INTEGER CHECK (base_difficulty BETWEEN 1 AND 5),
  quiet_mode INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'active'
    CHECK (status IN ('active','archived','deleted')),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  last_reminder_at TEXT,
  next_reminder_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_task_next ON task (status, next_reminder_at);

CREATE TABLE IF NOT EXISTS task_occurrence (
  id TEXT PRIMARY KEY,
  task_id TEXT NOT NULL REFERENCES task(id) ON DELETE CASCADE,
  occurrence_date TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending','in_progress','partial','completed','skipped','overdue','overdue_completed')),
  started_at TEXT,
  paused_at TEXT,
  accumulated_pause_sec INTEGER NOT NULL DEFAULT 0,
  expected_end_at TEXT,
  completed_at TEXT,
  end_notification_id TEXT,
  was_overdue INTEGER NOT NULL DEFAULT 0,
  UNIQUE (task_id, occurrence_date)
);

CREATE INDEX IF NOT EXISTS idx_occ ON task_occurrence (status, occurrence_date);

CREATE TABLE IF NOT EXISTS reminder_record (
  id TEXT PRIMARY KEY,
  task_id TEXT NOT NULL REFERENCES task(id) ON DELETE CASCADE,
  occurrence_id TEXT REFERENCES task_occurrence(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('due','delay','end','secondary')),
  scheduled_time TEXT NOT NULL,
  actual_time TEXT,
  action_taken TEXT,
  delay_minutes INTEGER,
  notification_id TEXT,
  status TEXT NOT NULL DEFAULT 'scheduled'
    CHECK (status IN ('scheduled','cancelled','handled','missed')),
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_rr ON reminder_record (status, scheduled_time);

CREATE TABLE IF NOT EXISTS completion (
  id TEXT PRIMARY KEY,
  task_id TEXT NOT NULL REFERENCES task(id) ON DELETE CASCADE,
  occurrence_id TEXT NOT NULL REFERENCES task_occurrence(id) ON DELETE CASCADE,
  completed_at TEXT NOT NULL,
  percent INTEGER NOT NULL CHECK (percent BETWEEN 1 AND 100),
  reason TEXT CHECK (reason IN ('not_enough_time','too_hard','distracted','not_interested','unwell','other')),
  note TEXT,
  status TEXT NOT NULL CHECK (status IN ('completed','partial','overdue_completed')),
  CHECK (status <> 'partial' OR reason IS NOT NULL)
);

CREATE TABLE IF NOT EXISTS mascot_profile (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  avatar TEXT NOT NULL,
  tone TEXT NOT NULL DEFAULT 'gentle',
  lines_daily TEXT NOT NULL,
  lines_comfort TEXT NOT NULL,
  lines_praise TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS settings (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  notifications_enabled INTEGER NOT NULL DEFAULT 1,
  notification_permission TEXT NOT NULL DEFAULT 'unknown',
  quiet_mode INTEGER NOT NULL DEFAULT 0,
  quiet_start TEXT,
  quiet_end TEXT,
  default_delay_min INTEGER NOT NULL DEFAULT 15,
  battery_optimization_whitelist INTEGER NOT NULL DEFAULT 0,
  exact_alarm_guided_at TEXT,
  battery_opt_guided_at TEXT,
  active_timezone TEXT,
  last_recovery_at TEXT,
  last_export_at TEXT,
  updated_at TEXT NOT NULL
);
`;
