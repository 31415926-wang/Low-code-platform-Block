let defaultImg = require('../assets/image/defaultImg.png')
// 改用es方法
// import defaultImg from '../assets/image/defaultImg.png'
export default function () {
    const getDefaultImg = () => {
        return defaultImg
        // return new URL('../assets/image/defaultImg.png', import.meta.url).href; //只能本地项目用
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
