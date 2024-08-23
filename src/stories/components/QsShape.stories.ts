
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
export const test3: Story = {
    args: {
        widgetTitle: '正方形',
        ...defaultShapeProps,
        width: '150px',
        height: '70px',
        shapeValue: 'square',
        'background-color': '#9666d1'
    }
};
export const test4: Story = {
    args: {
        widgetTitle: '长方形',
        ...defaultShapeProps,
        width: '40px',
        height: '170px',
        shapeValue: 'rectangle',
        'background-color': '#9666d1'
    }
};

