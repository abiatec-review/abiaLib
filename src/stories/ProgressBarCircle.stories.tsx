//@ts-ignore

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProgressBarCircle from 'components/ProgressBars/ProgressBarCircle';

export default {
  title: 'Components/Simple/ProgressBarCircle',
  component: ProgressBarCircle,
  argTypes: {
    textClassName: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof ProgressBarCircle>;

const Template: ComponentStory<typeof ProgressBarCircle> = (args) => <ProgressBarCircle {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: 100,
  progress: 25,
  strokeWidth: 4,
  isBackground: true,
  isText: true
};

