import styled, { css } from 'styled-components';

export const ButtonStyles = styled.button`
  padding: 1.5rem 6rem;
  border: none;
  border-radius: 1.1rem;

  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.black};

  color: ${({ theme, isPrimary }) => (isPrimary ? theme.color.white : theme.color.lightBlue)};
  background-color: ${({ theme, isPrimary }) => (isPrimary ? theme.color.blue : 'transparent')};
  box-shadow: ${({ theme, isPrimary }) => (isPrimary ? `0px 20px 20px 0px ${theme.color.blueShadow}` : 0)};

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.violet};
  }

  ${({ isBasic }) =>
    isBasic &&
    css`
      padding: 0;
      border-radius: 0;
      font-size: ${({ theme }) => theme.fontSize.xs};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: ${({ theme }) => theme.color.blue};
      background-color: transparent;
      box-shadow: none;
      text-decoration: underline;

      &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.color.violet};
        text-decoration: none;
      }

      @media (min-width: 1000px) {
        font-size: ${({ theme }) => theme.fontSize.s};
      }
    `}

  ${({ isTransparent }) =>
    isTransparent &&
    css`
      &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.color.black};
      }
    `}
`;
