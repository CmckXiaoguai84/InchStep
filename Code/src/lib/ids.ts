/**
 * 本地 ID 生成：时间前缀 + 随机后缀，够用且可排序。
 * 不引入额外依赖（expo-crypto 未安装，且 V1 不需要密码学强度）。
 */

let counter = 0;

export function createId(prefix?: string): string {
  counter = (counter + 1) % 0xffff;
  const time = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 8);
  const seq = counter.toString(36).padStart(3, '0');
  const base = `${time}-${rand}${seq}`;
  return prefix ? `${prefix}_${base}` : base;
}

export const IdPrefix = {
  task: 'task',
  occurrence: 'occ',
  reminder: 'rem',
  completion: 'cmp',
} as const;
