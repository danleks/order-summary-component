import React from 'react';
import { TitleStyles } from './Title.styles';

const Title = ({ isBig, children }) => {
  return <TitleStyles isBig={isBig}>{children}</TitleStyles>;
};

export default Title;
