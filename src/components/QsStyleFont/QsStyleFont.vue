<template>
    <p :style="styleProps">
        {{ $props.textValue || $props.titleValue || $props.widgetTitle }}
    </p>
</template>

<script setup lang='ts'>
import { textProps, commonProps } from '@/type/widgets/index'
import { textStyleKeys } from '@/components/widgetStyleKey'
import useHandleWidget from '@/hooks/useHandleWidget'

const $props = defineProps<commonProps & textProps & {
    widgetTitle: string // 用于空文本时显示为物料标题
}>()

// 注意，prop接收后的属性key都会变成驼峰
const { styleProps } = useHandleWidget<commonProps & textProps & { widgetTitle: string }>($props, textStyleKeys)

</script>

<style scoped lang='scss'></style>
