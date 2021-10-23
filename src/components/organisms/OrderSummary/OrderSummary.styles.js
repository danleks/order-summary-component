import styled from 'styled-components';
import { ReactComponent as OrderImg } from 'assets/img/music_flatline.svg';

export const OrderSummaryStyles = styled.div`
  display: grid;
  grid-template-rows: 16rem 1fr;
  height: 56.7rem;
  width: 32.7rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.color.white};
  @media (min-width: 1000px) {
    grid-template-rows: 22rem 1fr;
    height: 69.7rem;
    width: 45rem;
  }
`;

export const OrderHeaderStyles = styled.div`
  width: 100%;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
`;

export const OrderImgStyles = styled(OrderImg)`
  width: 100%;
  height: auto;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;

export const OrderWrapperStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 3.1rem;

  & > h2 {
    padding-top: 3.2rem;
    @media (min-width: 1000px) {
      padding-top: 4.5rem;
    }
  }

  & > p {
    padding-top: 1.6rem;
    @media (min-width: 1000px) {
      padding-top: 1.7rem;
    }
  }

  @media (min-width: 1000px) {
    padding: 0 5rem;
  }
`;

export const OrderButtonWrapperStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 2.4rem;

  @media (min-width: 1000px) {
    padding-top: 3.2rem;
  }
`;
