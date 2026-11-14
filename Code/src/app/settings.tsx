import { ScreenPlaceholder } from '@/components/ui/screen-placeholder';

/** 设置与权限：通知、精确闹钟、电池优化、安静模式、导出 JSON（模块 8） */
export default function SettingsScreen() {
  return (
    <ScreenPlaceholder
      module={8}
      title="设置"
      subtitle="通知权限与降级提醒、精确闹钟引导、电池优化白名单（自报）、安静模式、导出 JSON。"
    />
  );
}
