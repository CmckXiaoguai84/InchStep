import { useLocalSearchParams } from 'expo-router';

import { ScreenPlaceholder } from '@/components/ui/screen-placeholder';

/** 每日结算：完成数 / 平均完成度 / 跳过数 / 过时数（模块 7，D19 + D31） */
export default function ReviewScreen() {
  const { date } = useLocalSearchParams<{ date?: string }>();

  return (
    <ScreenPlaceholder
      module={7}
      title="今日结算"
      subtitle={`完成数、平均完成度、跳过数、过时数。日期：${date ?? '今天'}`}
    />
  );
}
