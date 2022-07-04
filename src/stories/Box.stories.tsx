import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';

import Button from 'components/Button';

export default {
  title: 'Components/Simple/Box',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => (
  <Button className="asd">ButtonBox</Button> as StoryFnReactReturnType
);

export const Primary = Template.bind({});
