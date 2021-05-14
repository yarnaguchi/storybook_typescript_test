import React, { ComponentProps, useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { CssBaseline } from '@material-ui/core';
import { PassPropState2 } from './PassPropState2';

export default {
  title: 'components/PassPropState2',
  component: PassPropState2,
  decorators: [
    (Story) => (
      <>
        <CssBaseline />
        <Story />
      </>
    ),
  ],
  argTypes: {
    defaultValue: {
      control: { type: 'text' },
    },
    state: { table: { disable: true } },
  },
} as Meta;

const Template: Story<
  ComponentProps<typeof PassPropState2> & { defaultValue: string }
> = (args) => {
  const { defaultValue, ...passArgs } = args;
  const [value, setValue] = useState<string>(args.defaultValue);
  return <PassPropState2 {...{ state: [value, setValue] }} {...passArgs} />;
};

export const Primary = Template.bind({});
Primary.args = {} as ComponentProps<typeof PassPropState2>;
