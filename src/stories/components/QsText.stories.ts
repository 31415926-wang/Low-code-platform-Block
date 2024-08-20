
import QsText from "@/components/QsText/QsText.vue";
import type { Meta, StoryObj } from '@storybook/vue3';
import { defaultCommonProps, defaultTextProps } from '@/components/defaultProps';

const meta: Meta<typeof QsText> = {
    title: 'Example/QsText',
    component: QsText,
};

export default meta;


type Story = StoryObj<typeof QsText>;

export const Primary: Story = {
    args: {
        widgetTitle: '标题物料-标题',
        ...defaultCommonProps,
        ...defaultTextProps,
        titleValue: '标题文字',
        tag: 'h2'
    }
};

export const Secondary: Story = {
    args: {
        widgetTitle: '标题物料-文字',
        ...defaultCommonProps,
        ...defaultTextProps,
        textValue: '正文内容',
        tag: 'p'
    }
};

