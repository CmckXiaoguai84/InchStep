/** 全局时间常量（D27 / D29 / D34）。毫秒单位后缀显式标注。 */

/** end 到点后的宽限期：超时未响应即转 overdue（30 分钟） */
export const GRACE_END_MS = 30 * 60 * 1000;

/** 扫描时把「刚过期不久」也算作有效过期的容差 */
export const SCAN_LAG_TOLERANCE_MS = 60 * 1000;

/** 恢复扫描去抖间隔 */
export const RECOVERY_DEBOUNCE_MS = 30 * 1000;

/** 待会可选分钟数（通知动作固定 15，其余在 App 内改） */
export const SNOOZE_OPTIONS = [5, 15, 30, 60] as const;
export const DEFAULT_DELAY_MIN = 15;

/** finish「待会完成帮我记着」的 secondary 间隔 */
export const SECONDARY_DELAY_MIN = 15;

/** finish「继续完成」的续期时长与下限缓冲（D29） */
export const CONTINUE_EXTEND_MS = 10 * 60 * 1000;
export const CONTINUE_FLOOR_MS = 60 * 1000;

/** 补排 end 时的最小提前量，避免使用过去时间（D34） */
export const IMMEDIATE_FIRE_LEAD_MS = 1000;

/** 前台降级提醒轮询间隔 */
export const FALLBACK_POLL_INTERVAL_MS = 30 * 1000;
