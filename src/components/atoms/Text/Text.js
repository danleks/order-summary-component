import React from 'react';
import { TextStyles } from './Text.styles';

const Text = ({ isBig, children }) => {
  return <TextStyles isBig={isBig}>{children}</TextStyles>;
};

export default Text;
