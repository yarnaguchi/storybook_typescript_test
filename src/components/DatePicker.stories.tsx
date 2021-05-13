import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { DatePicker } from './DatePicker';
import { CssBaseline } from '@material-ui/core';

export default {
  title: 'components/日報作成/DatePicker',
  component: DatePicker,
  args: {},
  decorators: [
    (Story) => (
      <>
        <CssBaseline />
        <Story />
      </>
    ),
  ],
  argTypes: {
    // Controlsの定義
    // variant: {
    //   control: {
    //     type: 'radio',
    //     options: ['primary', 'secondary'],
    //   },
    // },
  },
} as Meta;

// TODO: React Stateのモック方法調査
const Template: Story<ComponentProps<typeof DatePicker>> = (args) => (
  <DatePicker {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
