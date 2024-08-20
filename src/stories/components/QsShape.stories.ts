
import QsShape from "@/components/QsShape/QsShape.vue";
import type { Meta, StoryObj } from '@storybook/vue3';
import { defaultCommonProps, defaultShapeProps } from '@/components/defaultProps';

const meta: Meta<typeof QsShape> = {
    title: 'Example/QsShape',
    component: QsShape,
};

export default meta;


type Story = StoryObj<typeof QsShape>;

export const Primary: Story = {
    args: {
        widgetTitle: '三角形',
        ...defaultShapeProps,
        width: '70px',
        height: '70px',
        shapeValue: 'triangle',
        'background-color': '#ffc0cb'
    }
};

export const Secondary: Story = {
    args: {
        widgetTitle: '圆形',
        ...defaultShapeProps,
        width: '70px',
        height: '70px',
        shapeValue: 'circular',
        'background-color': '#5ccac7'
    }
};

