import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors, Layout, Radius, Spacing, Type } from '@/constants/theme';
import { localDateKey } from '@/lib/time';

const NAV_ITEMS = [
  { href: '/task/new', label: '新建任务' },
  { href: '/review', label: '今日结算' },
  { href: '/mascot', label: '吉祥物' },
  { href: '/settings', label: '设置' },
] as const;

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>{localDateKey()}</Text>
          <Text style={styles.title}>今日</Text>
          <Text style={styles.subtitle}>到点我会叫你，你只需要选一下。</Text>
        </View>

        <View style={styles.emptyCard}>
          <Text style={styles.emptyTitle}>还没有今天的任务</Text>
          <Text style={styles.emptyBody}>
            模块 1 只负责骨架、路由与本地数据库，任务列表在模块 2 接入。
          </Text>
        </View>

        <View style={styles.navRow}>
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} asChild>
              <Pressable style={({ pressed }) => [styles.navChip, pressed && styles.navChipPressed]}>
                <Text style={styles.navText}>{item.label}</Text>
              </Pressable>
            </Link>
          ))}
        </View>
      </ScrollView>

      <Link href="/task/new" asChild>
        <Pressable style={styles.fab} accessibilityLabel="新建任务">
          <Text style={styles.fabIcon}>＋</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.paper,
  },
  content: {
    padding: Layout.screenPadding,
    paddingBottom: Spacing.seven + Spacing.six,
    gap: Spacing.five,
    maxWidth: Layout.maxContentWidth,
    width: '100%',
    alignSelf: 'center',
  },
  header: {
    gap: Spacing.two,
    paddingTop: Spacing.four,
  },
  eyebrow: {
    ...Type.label,
    color: Colors.inkMuted,
    letterSpacing: 1,
  },
  title: {
    ...Type.display,
    color: Colors.ink,
  },
  subtitle: {
    ...Type.body,
    color: Colors.inkSoft,
  },
  emptyCard: {
    backgroundColor: Colors.card,
    borderRadius: Radius.lg,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.line,
    padding: Spacing.five,
    gap: Spacing.two,
  },
  emptyTitle: {
    ...Type.subtitle,
    color: Colors.ink,
  },
  emptyBody: {
    ...Type.body,
    color: Colors.inkSoft,
  },
  navRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.three,
  },
  navChip: {
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.three,
    borderRadius: Radius.pill,
    backgroundColor: Colors.sunken,
  },
  navChipPressed: {
    backgroundColor: Colors.mossSoft,
  },
  navText: {
    ...Type.label,
    color: Colors.moss,
  },
  fab: {
    position: 'absolute',
    right: Spacing.five,
    bottom: Spacing.five,
    width: 56,
    height: 56,
    borderRadius: Radius.pill,
    backgroundColor: Colors.moss,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabIcon: {
    color: Colors.white,
    fontSize: 28,
    lineHeight: 32,
  },
});
