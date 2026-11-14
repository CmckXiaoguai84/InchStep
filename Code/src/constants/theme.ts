/**
 * 「软禁」设计令牌：暖米白纸感背景 + 墨绿主色 + 陶土点缀。
 * 全 App 只用这一套色彩，暗色模式暂不支持（app.json 已锁 light）。
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  /** 纸张背景 */
  paper: '#F7F3EA',
  /** 卡片 / 面板 */
  card: '#FCF9F2',
  /** 次级背景（输入框、时间线槽位） */
  sunken: '#EFE8D9',
  /** 主文字（墨绿黑） */
  ink: '#1E2A24',
  /** 次级文字 */
  inkSoft: '#5F6F64',
  /** 更浅的说明文字 */
  inkMuted: '#8B978C',
  /** 主色：墨绿 */
  moss: '#2F5D50',
  mossDark: '#234A3F',
  mossSoft: '#DCE6DF',
  /** 点缀：陶土 */
  clay: '#C2703D',
  claySoft: '#F0DCCB',
  /** 分割线 */
  line: '#DED5C4',
  /** 状态：进行中 / 过时 / 完成 */
  live: '#2F5D50',
  overdue: '#B4553C',
  done: '#6E8B62',
  /** 纯白（按钮文字等） */
  white: '#FFFFFF',
} as const;

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 12,
  four: 16,
  five: 24,
  six: 32,
  seven: 48,
} as const;

export const Radius = {
  sm: 10,
  md: 16,
  lg: 22,
  xl: 28,
  pill: 999,
} as const;

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'sans-serif',
    serif: 'serif',
    rounded: 'sans-serif',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Type = {
  display: { fontSize: 34, lineHeight: 40, fontWeight: '700' },
  title: { fontSize: 24, lineHeight: 30, fontWeight: '700' },
  subtitle: { fontSize: 18, lineHeight: 24, fontWeight: '600' },
  body: { fontSize: 15, lineHeight: 22, fontWeight: '400' },
  label: { fontSize: 13, lineHeight: 18, fontWeight: '600' },
  caption: { fontSize: 12, lineHeight: 16, fontWeight: '400' },
  /** 大倒计时：等宽 + tabular 数字 */
  timer: { fontSize: 64, lineHeight: 72, fontWeight: '700', fontVariant: ['tabular-nums'] },
} as const;

export const Layout = {
  screenPadding: Spacing.five,
  maxContentWidth: 720,
} as const;
