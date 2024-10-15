
// 物料的prop属性
export type commonProps = {
    tag?: string,
    url?: string,
    height: string,
    width: string,
    'padding-left': string;
    'padding-right': string;
    'padding-top': string;
    'padding-bottom': string;
    opacity: number,
    position: string,
    top?: string,
    left?: string,
    'border-radius': string,
    'border-color': string,
    'border-style': string,
    'border-width': string,
    'background-color': string,
    'background-image'?: string,
    'background-size'?: string,
    'box-shadow': string
    rotate: string,
    scale: number
}
export type textProps = {
    // 通过初始值去决定表单项
    textValue?: string,
    titleValue?: string,
    'font-size': string,
    'font-family': string,
    'font-weight': string,
    'font-style': string,
    'line-height': number,
    'text-align': string,
    color: string,
    'text-shadow': string
}
export type imgProps = {
    src: string
}

export type shapeProps = Pick<commonProps, // 都是从已有的属性取
    'position' | 'height' | 'width' | 'opacity' | 'top' | 'left' | 'rotate' | 'background-color'>
    & { shapeValue?: 'triangle' | 'square' | 'circular' }

export type AllWidgetProps = commonProps & textProps & imgProps & shapeProps

/* 完整物料的结构 */
export type WidgetName = 'QsText' | 'QsImg' | 'QsStyleFont' | 'QsShape'// 业务组件的名称
