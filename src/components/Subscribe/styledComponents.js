import styled from 'styled-components';

export const SubscribeLayout = styled.div`
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 1.25rem;
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 800px) {
    padding: 4rem 2rem 0;
    width: calc(100% - 4rem);
  }

  @media screen and (min-width: 800px) {
    float: left;
    height: 100%;
    padding: 0 2rem;
    width: calc(75% - 4rem);
  }
`;

export const Presentation = styled.div`
  margin: 2rem 0;
  max-width: 54rem;
`;

export const Form = styled.form`
  margin: 1rem 0 4rem;
  position: relative;
`;

export const Input = styled.input`
  align-items: center;
  appearance: none;
  border-radius: 0.5rem;
  border: none;
  box-shadow: none;
  display: flex;
  font-size: 1rem;
  height: 3rem;
  padding: 0 1rem;

  @media screen and (max-width: 800px) {
    &:first-of-type {
      margin-bottom: 0.5rem;
      width: calc(100% - 2rem);
    }

    &:last-of-type {
      margin: 0.5rem 0;
      width: calc(100% - 2rem);
    }
  }

  @media screen and (min-width: 800px) {
    &:first-of-type {
      float: left;
      margin-right: 0.5rem;
      width: calc(25% - 2.5rem);
    }

    &:last-of-type {
      float: right;
      margin-left: 0.5rem;
      width: calc(75% - 2.5rem);
    }
  }
`;

export const Button = styled.button`
  align-items: center;
  background: #639fbf;
  border: none;
  border-radius: 0.25rem;
  display: flex;
  color: #fff;
  font-size: 1rem;
  height: 2rem;
  justify-content: center;
  transition: all 0.5s;
  width: 6rem;

  &:disabled {
    background-color: #c1c1c1;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    opacity: 0.75;
    outline: none;
  }

  @media screen and (max-width: 800px) {
    margin-left: auto;
  }

  @media screen and (min-width: 800px) {
    position: absolute;
    right: 1rem;
    top: 0.375rem;
  }
`;

export const ConfirmationLabel = styled.p`
  && {
    color: #639fbf;
    float: right;
    font-size: 0.875rem;
    text-align: right;
    transition: all 0.25s;
    width: 100%;

    &.hidden {
      opacity: 0;
      visibility: hidden;
    }

    &.visible {
      opacity: 1;
      visibility: visible;
    }
  }
`;
