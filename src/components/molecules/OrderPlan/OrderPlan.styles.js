import styled from 'styled-components';

export const OrderPlanStyles = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  /* max-width: 35.4rem; */
  padding: 1.6rem;
  margin-top: 2.4rem;
  border-radius: 1.1rem;

  background-color: ${({ theme }) => theme.color.lightGrey};

  @media (min-width: 1000px) {
    justify-content: center;
    padding: 2.5rem 0;
  }
`;

export const OrderPlanDetailsStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 40px 0 16px;

  @media (min-width: 1000px) {
    padding: 0 95px 0 16px;
  }
`;
