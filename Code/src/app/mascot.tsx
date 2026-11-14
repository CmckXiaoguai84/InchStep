import { ScreenPlaceholder } from '@/components/ui/screen-placeholder';

/** 吉祥物：单形象、三组预设话术、安静模式入口（模块 8） */
export default function MascotScreen() {
  return (
    <ScreenPlaceholder
      module={8}
      title="小蜗"
      subtitle="V1 只有一个形象：日常鼓励 / 未完成安慰 / 完成与坚持鼓励。话术为本地模板，不接 AI。"
    />
  );
}
