import React from 'react';
import { Story } from '@storybook/react';
import { MyButton, Props } from './MyButton';
import 'fontsource-roboto';

// https://storybook.js.org/docs/react/api/csf
// 現在はCSF記法を推奨しているが、ReactNativeではstoriesOfAPI記法が必須。

export default {
  title: 'components/Button',
  component: MyButton,
  args: {
    label: 'default',
  },
};

const Template: Story<Props> = (args) => <MyButton {...args} />;

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
