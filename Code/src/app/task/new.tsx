import { useLocalSearchParams } from 'expo-router';

import { ScreenPlaceholder } from '@/components/ui/screen-placeholder';

/** 新建 / 编辑任务：先选预设卡片再展开表单（模块 2） */
export default function TaskEditorScreen() {
  const { id } = useLocalSearchParams<{ id?: string; preset?: string }>();

  return (
    <ScreenPlaceholder
      module={2}
      title={id ? '编辑任务' : '新建任务'}
      subtitle="四类预设卡片：临时任务 / 时间段任务 / 习惯 / 日常。表单与校验在模块 2 实现。"
    />
  );
}
