//@ts-ignore

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProgressBar from 'components/ProgressBars/ProgressBar';

export default {
  title: 'Components/Simple/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Horizontal = Template.bind({});

Horizontal.args = {
  completed: 20,
};

