/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from 'components/index';

export default {
  title: 'Components/Simple/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Children',
};
