import React from 'react';
import OrderPlan from './OrderPlan';

export default {
  component: Text,
  title: 'Components/Molecules/OrderPlan',
};

const Template = (args) => <OrderPlan {...args} />;

export const Default = Template.bind({});
Default.args = {};
