//@ts-ignore
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from 'components/Button';

export default {
  title: 'Components/Simple/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});

Contained.args = {
  children: 'Contained',
  type: 'contained',
};

export const Outlined = Template.bind({});

Outlined.args = {
  children: 'Outlined',
  type: 'outlined',
};
export const Text = Template.bind({});

Text.args = {
  children: 'Text',
  type: 'text'
};