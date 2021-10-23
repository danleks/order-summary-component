import React from 'react';
import { MainTemplateStyles } from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
  return <MainTemplateStyles>{children}</MainTemplateStyles>;
};

export default MainTemplate;
