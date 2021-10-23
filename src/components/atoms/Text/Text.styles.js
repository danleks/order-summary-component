import styled from 'styled-components';

export const TextStyles = styled.p`
  /* padding-top: 1.6rem; */

  font-size: ${({ theme, isBig }) => (isBig ? theme.fontSize.m : theme.fontSize.s)};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.m};
  text-align: center;

  color: ${({ theme }) => theme.color.lightBlue};

  @media (min-width: 1000px) {
    font-size: ${({ theme, isBig }) => (isBig ? theme.fontSize.l : theme.fontSize.m)};
    line-height: ${({ theme }) => theme.lineHeight.l};
  }
`;
