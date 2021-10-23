import React from 'react';
import { ReactComponent as OrderIcon } from 'assets/img/icon.svg';
import { OrderPlanStyles, OrderPlanDetailsStyles } from './OrderPlan.styles';
import Button from 'components/atoms/Button/Button';
import Title from 'components/atoms/Title/Title';
import Text from 'components/atoms/Text/Text';

const OrderPlan = ({ type, price }) => {
  return (
    <OrderPlanStyles>
      <OrderIcon />
      <OrderPlanDetailsStyles>
        <Title>{type} Plan</Title>
        <Text>${price}/year</Text>
      </OrderPlanDetailsStyles>
      <Button isBasic label="Change" />
    </OrderPlanStyles>
  );
};

export default OrderPlan;
