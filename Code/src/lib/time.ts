/** 时间工具：统一毫秒时间戳 + 本地日期键（YYYY-MM-DD，归属开始日，D13）。 */

export const MINUTE_MS = 60 * 1000;
export const HOUR_MS = 60 * MINUTE_MS;
export const DAY_MS = 24 * HOUR_MS;

export function nowMs(): number {
  return Date.now();
}

export function toIso(ms: number): string {
  return new Date(ms).toISOString();
}

export function fromIso(iso: string): number {
  return new Date(iso).getTime();
}

export function addMinutes(ms: number, minutes: number): number {
  return ms + minutes * MINUTE_MS;
}

/** 剩余毫秒，可为负（表示已超时） */
export function remainingMs(expectedEndAt: number, at: number = nowMs()): number {
  return expectedEndAt - at;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function pad2(value: number): string {
  return value < 10 ? `0${value}` : String(value);
}

/** 本地日期键，用于 occurrence_date */
export function localDateKey(ms: number = nowMs()): string {
  const d = new Date(ms);
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

/** HH:mm（本地），用于 start_time / end_time / reminder_time */
export function formatClock(ms: number): string {
  const d = new Date(ms);
  return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
}

/** 把 HH:mm 解析到指定日期的本地时间戳 */
export function parseClockOn(dateKey: string, clock: string): number {
  const [year, month, day] = dateKey.split('-').map(Number);
  const [hour, minute] = clock.split(':').map(Number);
  return new Date(year, (month ?? 1) - 1, day ?? 1, hour ?? 0, minute ?? 0, 0, 0).getTime();
}

/** mm:ss / h:mm:ss，倒计时显示用；负数钳到 0 */
export function formatDuration(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  if (hours > 0) return `${hours}:${pad2(minutes)}:${pad2(seconds)}`;
  return `${pad2(minutes)}:${pad2(seconds)}`;
}

/** 人类可读时长：1 小时 5 分钟 / 25 分钟 */
export function formatHumanDuration(ms: number): string {
  const totalMinutes = Math.round(ms / MINUTE_MS);
  if (totalMinutes < 60) return `${totalMinutes} 分钟`;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return minutes === 0 ? `${hours} 小时` : `${hours} 小时 ${minutes} 分钟`;
}

/** 当前时区标识，写进 settings.active_timezone 用于时区变化检测（D23） */
export function currentTimeZone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone ?? 'UTC';
  } catch {
    return 'UTC';
  }
}
