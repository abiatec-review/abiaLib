//@ts-ignore
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from "../components/Switch";

export default {
  title: 'Components/Simple/Switch',
  component: Switch,
  argTypes: {
    type: {
      options: ['in', 'out'],
      control: { type: 'radio' },
    },
    labelClassName: {
      table: { disable: true },
    },
    onChange: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});

Default.args = {
  value: true,
  disabled: false,
};

