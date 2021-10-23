import React from 'react';
import Title from './Title';

export default {
  component: Title,
  title: 'Components/Atoms/Title',
};

const Template = (args) => <Title {...args}>Hello, World!</Title>;

export const Big = Template.bind({});
Big.args = {
  isBig: true,
};

export const Small = Template.bind({});
Small.args = {
  isBig: false,
};
