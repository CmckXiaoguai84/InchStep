import { useLocalSearchParams } from 'expo-router';

import { ScreenPlaceholder } from '@/components/ui/screen-placeholder';

/** 完成度 1%–100% + 原因 + 吉祥物安慰 + 二次提醒；ratingCommit 是唯一写 completion 的入口（模块 6） */
export default function RatingScreen() {
  const { occurrenceId } = useLocalSearchParams<{ occurrenceId: string }>();

  return (
    <ScreenPlaceholder
      module={6}
      title="完成了多少"
      subtitle={`滑块 1%–100%；低于 100% 需选原因并给安慰话术。occurrence: ${occurrenceId ?? '-'}`}
    />
  );
}
