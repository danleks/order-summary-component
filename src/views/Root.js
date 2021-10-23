import React from 'react';
import OrderSummary from 'components/organisms/OrderSummary/OrderSummary';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyles';
import MainTemplate from 'components/templates/MainTemplate';
import { theme } from 'assets/styles/theme';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <OrderSummary />
      </MainTemplate>
    </ThemeProvider>
  );
};

export default Root;
