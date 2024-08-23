export default function () {
    // const getDefaultImg = () => {
    //     return require('../assets/image/defaultImg.png')
    // }
    const getDefaultImg = () => {
        // return require('../assets/image/defaultImg.png')
        return new URL('../assets/image/defaultImg.png', import.meta.url).href; //可以代替require方法
    }
    const getImgSrc = (srcValue: string) => {
        return srcValue.length !== 0
            ? srcValue
            : getDefaultImg()
    }
    return {
        getImgSrc
    }
}
