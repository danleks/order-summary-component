import React from 'react';
import OrderSummary from './OrderSummary';

export default {
  component: OrderSummary,
  title: 'Components/Organisms/OrderSummary',
};

const Template = (args) => <OrderSummary {...args} />;

export const Default = Template.bind({});
Default.args = {};
