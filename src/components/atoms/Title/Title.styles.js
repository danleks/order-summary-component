import styled from 'styled-components';

export const TitleStyles = styled.h2`
  /* padding-top: 3.2rem; */

  color: ${({ theme }) => theme.color.black};

  font-size: ${({ theme, isBig }) => (isBig ? theme.fontSize.xl : theme.fontSize.s)};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  @media (min-width: 1000px) {
    /* padding-top: 4.5rem; */

    font-size: ${({ theme, isBig }) => (isBig ? theme.fontSize.xxl : theme.fontSize.l)};
  }
`;
