import styled from 'styled-components';

export const PostLayout = styled.a`
  background: #ededed;
  border-left: 0.25rem solid #639fbf;
  color: inherit;
  display: block;
  padding: 1rem;
  transition: all 0.25s;
  width: calc(100% - 2rem);

  &:hover {
    opacity: 0.875;
  }
`;

export const Title = styled.h4`
  margin: 0.5rem 0 1.5rem;
  max-width: 100%;
`;

export const Image = styled.img`
  max-width: 100%;
`;
