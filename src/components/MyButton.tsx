/* eslint-disable react/prop-types */
import React from 'react';
import { Button, ButtonProps } from '@material-ui/core';

const MyButton: React.VFC<ButtonProps & { label: string }> = (props) => {
  const { label, ...buttonProps } = props;
  return <Button {...buttonProps}>{label}</Button>;
};

export default MyButton;
