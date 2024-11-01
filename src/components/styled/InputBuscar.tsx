import styled from 'styled-components';

const InputBuscar = styled.input`
  background-color: #f1f1f1;
  border-radius: 3rem; 
  padding: 10px 20px; 
  font-size: 16px; 
  width: 100%; 
  transition: border-color 0.3s; 

  &:hover {
    border-color: #9a9a9a; 
  }

  &:focus {
    outline: none; 
    border-color: #9a9a9a; 
  }
`;

export { InputBuscar };