import React from 'react';
import { OrderSummaryStyles, OrderHeaderStyles, OrderImgStyles, OrderWrapperStyles, OrderButtonWrapperStyles } from './OrderSummary.styles';
import Title from 'components/atoms/Title/Title';
import Text from 'components/atoms/Text/Text';
import OrderPlan from 'components/molecules/OrderPlan/OrderPlan';
import Button from 'components/atoms/Button/Button';

const OrderSummary = () => {
  return (
    <OrderSummaryStyles>
      <OrderHeaderStyles>
        <OrderImgStyles />
      </OrderHeaderStyles>
      <OrderWrapperStyles>
        <Title isBig>Order Summary</Title>
        <Text isBig>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</Text>
        <OrderPlan type="Annual" price="59.99" />
        <OrderButtonWrapperStyles>
          <Button isPrimary label="Proceed to Payment" />
          <Button isTransparent label="Cancel order" />
        </OrderButtonWrapperStyles>
      </OrderWrapperStyles>
    </OrderSummaryStyles>
  );
};

export default OrderSummary;
