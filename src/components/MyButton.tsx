import React from 'react';
import { Button, ButtonProps } from '@material-ui/core';

export interface Props extends ButtonProps {
  label?: string;
}

export const MyButton: React.VFC<Props> = (props) => {
  const { label, ...buttonProps } = props;
  return <Button {...buttonProps}>{label}</Button>;
};
