import styled from 'styled-components';

export const NewsLayout = styled.div`
  background-color: #fff;
  padding: 2rem;

  @media screen and (max-width: 800px) {
    width: calc(100% - 4rem);
  }

  @media screen and (min-width: 800px) {
    float: right;
    height: calc(100% - 4rem);
    width: calc(25% - 4rem);
  }
`;

export const Title = styled.h3`
  margin: 1rem 0;
`;
