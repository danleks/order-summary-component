import React from 'react';
import Text from './Text';

export default {
  component: Text,
  title: 'Components/Atoms/Text',
};

const Template = (args) => <Text {...args}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>;

export const Big = Template.bind({});
Big.args = {
  isBig: true,
};

export const Small = Template.bind({});
Small.args = {
  isBig: false,
};
