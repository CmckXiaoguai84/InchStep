import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { Colors, Spacing, Type } from '@/constants/theme';
import { initDatabase } from '@/db/client';

SplashScreen.preventAutoHideAsync();

type BootState = { status: 'loading' } | { status: 'ready' } | { status: 'error'; message: string };

export default function RootLayout() {
  const [boot, setBoot] = useState<BootState>({ status: 'loading' });

  useEffect(() => {
    let cancelled = false;

    async function bootstrap() {
      try {
        await initDatabase();
        if (!cancelled) setBoot({ status: 'ready' });
      } catch (error) {
        if (!cancelled) {
          setBoot({
            status: 'error',
            message: error instanceof Error ? error.message : String(error),
          });
        }
      } finally {
        await SplashScreen.hideAsync().catch(() => undefined);
      }
    }

    void bootstrap();
    return () => {
      cancelled = true;
    };
  }, []);

  if (boot.status === 'loading') {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={Colors.moss} />
        <Text style={styles.hint}>正在准备本地数据…</Text>
      </View>
    );
  }

  if (boot.status === 'error') {
    return (
      <View style={styles.center}>
        <Text style={styles.errorTitle}>数据库初始化失败</Text>
        <Text style={styles.hint}>{boot.message}</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Colors.paper },
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.paper,
    padding: Spacing.five,
    gap: Spacing.three,
  },
  errorTitle: {
    ...Type.subtitle,
    color: Colors.overdue,
  },
  hint: {
    ...Type.caption,
    color: Colors.inkMuted,
    textAlign: 'center',
  },
});
