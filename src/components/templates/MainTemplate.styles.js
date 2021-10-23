import styled from 'styled-components';

export const MainTemplateStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background};
`;
