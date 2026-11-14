import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, Radius, Spacing, Type } from '@/constants/theme';

type Props = {
  title: string;
  subtitle: string;
  /** 模块编号，仅用于占位提示，后续模块会替换整个页面 */
  module?: number;
};

/** 模块 1 占位屏：只验证路由与建表，不含业务逻辑 */
export function ScreenPlaceholder({ title, subtitle, module }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        {module ? <Text style={styles.badge}>模块 {module} 实现</Text> : null}
      </View>

      <Link href="/" style={styles.back}>
        返回今日
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.paper,
    padding: Spacing.five,
    justifyContent: 'center',
    gap: Spacing.five,
  },
  card: {
    backgroundColor: Colors.card,
    borderRadius: Radius.lg,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.line,
    padding: Spacing.five,
    gap: Spacing.three,
  },
  title: {
    ...Type.title,
    color: Colors.ink,
  },
  subtitle: {
    ...Type.body,
    color: Colors.inkSoft,
  },
  badge: {
    ...Type.label,
    color: Colors.clay,
  },
  back: {
    ...Type.label,
    color: Colors.moss,
    textAlign: 'center',
    paddingVertical: Spacing.three,
  },
});
