import React from 'react';
import MyButton from './MyButton';

export default {
  title: 'Components/Button',
  component: MyButton,
}

export const Primary: React.VFC<{}> = () => (
  <MyButton variant="contained" color="primary" label="Primary Button" />
);
