import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { CssBaseline } from '@material-ui/core';
import { Graph } from './Graph';

export default {
  title: 'components/Graph',
  component: Graph,
  decorators: [
    (Story) => (
      <>
        <CssBaseline />
        <Story />
      </>
    ),
  ],
} as Meta;

const Template: Story<ComponentProps<typeof Graph>> = (args) => (
  <Graph {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
