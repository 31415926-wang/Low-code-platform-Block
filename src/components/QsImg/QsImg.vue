<template>
    <!-- <img :src="imgSrc" alt="" :style="styleProps"> -->
    <img :src="defaultImg" alt="" :style="styleProps">
    <!-- {{imgSrc}} -->
</template>

<script setup lang='ts'>
import defaultImg from '../../assets/image/defaultImg.png'

import useHandleWidget from '../../hooks/useHandleWidget'
import { commonProps, imgProps } from '../../type/widgets/index'
import { imgStyleKeys } from '../widgetStyleKey'
import useDefaultImg from '../../hooks/useDefaultImg'
import { computed } from 'vue'

const $props = defineProps<commonProps & imgProps>()

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
