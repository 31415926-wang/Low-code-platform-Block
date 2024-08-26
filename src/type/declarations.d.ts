// 使ts可以解析引入图片
declare module "*.png" {
    const value: string;
    export default value;
}