
import QsImg from "@/components/QsImg/QsImg.vue";
import type { Meta, StoryObj } from '@storybook/vue3';
import { defaultCommonProps, defaultImgProps } from '@/components/defaultProps';

const meta: Meta<typeof QsImg> = {
    title: 'Example/QsImg',
    component: QsImg,
};

export default meta;
// 

type Story = StoryObj<typeof QsImg>;

export const Primary: Story = {
    args: {
        ...defaultCommonProps,
        'padding-top': '0px',
        'padding-bottom': '0px',
        width: '150px',
        ...defaultImgProps
    }
};


