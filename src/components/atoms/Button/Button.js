import React from 'react';
import { ButtonStyles } from './Button.styles';

const Button = ({ isPrimary, isBasic, isTransparent, label }) => {
  return (
    <ButtonStyles isBasic={isBasic} isPrimary={isPrimary} isTransparent={isTransparent}>
      {label}
    </ButtonStyles>
  );
};

export default Button;
