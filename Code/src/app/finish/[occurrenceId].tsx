import { useLocalSearchParams } from 'expo-router';

import { ScreenPlaceholder } from '@/components/ui/screen-placeholder';

/** 完成确认：已完成 / 继续完成（+10min）/ 待会完成帮我记着（secondary 15min）（模块 6） */
export default function FinishScreen() {
  const { occurrenceId } = useLocalSearchParams<{ occurrenceId: string }>();

  return (
    <ScreenPlaceholder
      module={6}
      title="时间到了"
      subtitle={`已完成 / 继续完成 / 待会完成帮我记着。occurrence: ${occurrenceId ?? '-'}`}
    />
  );
}
