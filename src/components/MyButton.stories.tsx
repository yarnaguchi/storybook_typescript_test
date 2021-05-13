import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { MyButton } from './MyButton';
import 'fontsource-roboto';
import { CssBaseline } from '@material-ui/core';

// https://storybook.js.org/docs/react/api/csf
// 現在はCSF記法を推奨しているが、ReactNativeではstoriesOfAPI記法が必須。

export default {
  title: 'components/Button',
  component: MyButton,
  args: {
    label: 'default',
  },
};
  decorators: [
    (Story) => (
      <>
        <CssBaseline />
        <Story />
      </>
    ),
  ],

const Template: Story<ComponentProps<typeof MyButton>> = (args) => (
  <MyButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  color: 'primary',
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'contained',
  color: 'secondary',
  label: 'Secondary Button',
};

export const Default = Template.bind({});
