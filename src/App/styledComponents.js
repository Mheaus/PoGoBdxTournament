import styled from 'styled-components';

export const AppLayout = styled.div`
  height: 100%;
  width: 100%;
`;

export const Subscribe = styled.div`
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  float: left;
  height: 100%;
  justify-content: center;
  padding: 0 2rem;
  width: calc(62.5% - 4rem);

  p {
    font-size: 1.25rem;
    margin: 0.5rem 0;
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
  width: calc(100% - 2rem);
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
  position: absolute;
  right: 1rem;
  top: 0.375rem;
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
`;

export const News = styled.div`
  background-color: #f4f4f4;
  float: right;
  height: 100%;
  width: 37.5%;
`;
