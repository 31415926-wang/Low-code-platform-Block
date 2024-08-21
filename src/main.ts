import type { App } from 'vue'
import QsImg from "@/components/QsImg/QsImg.vue";
import QsShape from "@/components/QsShape/QsShape.vue";
import QsStyleFont from "@/components/QsStyleFont/QsStyleFont.vue";
import QsText from "@/components/QsText/QsText.vue";

export {
    commonProps,
    textProps,
    imgProps,
    shapeProps,
    AllWidgetProps,
    WidgetName
} from '@/type/widgets/index'

export {
    defaultCommonProps,
    defaultTextProps,
    defaultImgProps,
    defaultShapeProps
} from '@/components/defaultProps'

export {
    parentWrapperStyleKeys,
    commonStyleKeys,
    textStyleKeys,
    imgStyleKeys,
    shapeStyleKeys
} from '@/components/widgetStyleKey'

// const install = function (app: App) {
//     /* 共用组件库中似乎不能用这种方式，组件未被打包 */
//     // @ts-ignore
//     const widgetComponents = require.context('@/components', true, /\.vue$/)
//     widgetComponents.keys().forEach((key: string) => {
//         const file = widgetComponents(key).default
//         const reg = /.*\/(.*)\.(vue|tsx)/
//         if (reg.exec(key)) {
//             const fileName = reg.exec(key)![1]
//             app.component(fileName, file)
//         }
//     })
// }

const install = function (app: App) {
    type componentsType = {
        [key: string]: any
    }
    const components: componentsType = {
        QsImg,
        QsShape,
        QsStyleFont,
        QsText
    }
    for (const key in components) {
        app.component(key, components[key])
    }
}

/* 供vue.use，这里一use就全部引入物料组件 */
// export default {
//     install
// }
export default install
