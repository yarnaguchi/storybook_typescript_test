import React from 'react';
import { MyButton } from './MyButton';
import 'fontsource-roboto';

export default {
  title: 'components/Button',
  component: MyButton,
  args: {
    label: 'default',
  },
};

export const Primary: React.VFC<{}> = () => (
  <MyButton variant="contained" color="primary" label="Primary Button" />
);

export const Secondary: React.VFC<{}> = () => (
  <MyButton variant="contained" color="secondary" label="Secondary Button" />
);

export const X: React.VFC = (args) => <MyButton {...args} />;
