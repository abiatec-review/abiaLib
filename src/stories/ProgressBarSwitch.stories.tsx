//@ts-ignore

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProgressBarSwitch from "../components/ProgressBars/ProgressBarSwitch";

export default {
  title: 'Components/Simple/ProgressBarSwitch',
  component: ProgressBarSwitch,
  argTypes: {
    textClassName: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof ProgressBarSwitch>;

const Template: ComponentStory<typeof ProgressBarSwitch> = (args) => <ProgressBarSwitch {...args} />;

export const Default = Template.bind({});

Default.args = {

};

