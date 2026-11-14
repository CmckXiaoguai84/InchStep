import { useLocalSearchParams } from 'expo-router';

import { ScreenPlaceholder } from '@/components/ui/screen-placeholder';

/** 到点全屏确认：开始 / 待会 / 跳过，非 snoozed 不可返回（模块 4，D20） */
export default function ConfirmScreen() {
  const { occurrenceId, snoozed } = useLocalSearchParams<{
    occurrenceId: string;
    snoozed?: string;
  }>();

  return (
    <ScreenPlaceholder
      module={4}
      title="到点了"
      subtitle={`开始 / 待会 / 跳过。occurrence: ${occurrenceId ?? '-'}${
        snoozed === '1' ? '（已待会，可返回）' : ''
      }`}
    />
  );
}
