<template>
    <!-- <div > -->
    <img :src="imgSrc" :id="$props.id" alt="" :style="styleProps">
    <!-- </div> -->
    <!-- {{imgSrc}} -->
</template>

<script setup lang='ts'>

import useHandleWidget from '../../hooks/useHandleWidget'
import { commonProps, imgProps } from '../../type/widgets/index'
import { imgStyleKeys } from '../widgetStyleKey'
import useDefaultImg from '../../hooks/useDefaultImg'
import { computed } from 'vue'

/* 手动控制id挂载 */
const $props = defineProps<commonProps & imgProps & { id: string }>()

const { styleProps } = useHandleWidget<commonProps & imgProps>($props, imgStyleKeys)

// 显示图片
const { getImgSrc } = useDefaultImg()
const imgSrc = computed(() => {
    return getImgSrc($props.src)
})

</script>

<style scoped lang='scss'>
img {
    vertical-align: bottom;
}
</style>
