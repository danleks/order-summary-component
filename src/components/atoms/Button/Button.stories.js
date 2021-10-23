import React from 'react';
import Button from './Button';

export default {
  component: Button,
  title: 'Components/Atoms/Button',
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isPrimary: true,
  label: 'Proceed to Payment',
};

export const Transparent = Template.bind({});
Transparent.args = {
  isPrimary: false,
  isTransparent: true,
  label: 'Cancel Order',
};

export const Basic = Template.bind({});
Basic.args = {
  isBasic: true,
  label: 'Change',
};
