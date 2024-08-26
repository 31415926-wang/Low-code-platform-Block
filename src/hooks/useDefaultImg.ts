
export default function () {
    const getDefaultImg = () => {
        // return require('../assets/image/defaultImg.png')
        return new URL('../assets/image/defaultImg.png', import.meta.url).href; //只能本地项目用
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
