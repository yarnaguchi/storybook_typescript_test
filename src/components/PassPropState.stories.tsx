import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { CssBaseline } from '@material-ui/core';
import { PassPropState } from './PassPropState';

export default {
  title: 'components/PassPropState',
  component: PassPropState,
  decorators: [
    (Story) => (
      <>
        <CssBaseline />
        <Story />
      </>
    ),
  ],
} as Meta;

const Template: Story<ComponentProps<typeof PassPropState>> = (args) => {
  return <PassPropState {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  defaultValue: 'Primary',
} as ComponentProps<typeof PassPropState>;
