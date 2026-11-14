import { useLocalSearchParams } from 'expo-router';

import { ScreenPlaceholder } from '@/components/ui/screen-placeholder';

/** 进行中：基于 started_at 的大倒计时、暂停、提前完成、放弃并稍后继续（模块 5） */
export default function SessionScreen() {
  const { occurrenceId } = useLocalSearchParams<{ occurrenceId: string }>();

  return (
    <ScreenPlaceholder
      module={5}
      title="进行中"
      subtitle={`倒计时按 started_at 与 expected_end_at 计算。occurrence: ${occurrenceId ?? '-'}`}
    />
  );
}
