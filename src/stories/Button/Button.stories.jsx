import React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    style: {
      control: { type: "radio" },
      options: ["primary", "secondary", "link"]
    }
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  style: "primary",
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  style: "secondary",
  label: 'Button',
};

export const Link = Template.bind({});
Link.args = {
  style: "link",
  label: 'Link',
};

