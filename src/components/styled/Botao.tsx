import styled from 'styled-components';

const Botao = styled.button`
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: block; 
  width: 100%; 
  font-size: 16px;
  margin: 4px 0; 
  cursor: pointer;
  border-radius: 3rem;
  transition: background-color 0.3s;
  margin: 5px 0;

  &:hover {
    filter: brightness(0.9); 
  }
`;

const BotaoEntrar = styled(Botao)`
  background-color: #db4437; 

  &:hover {
    background-color: #c13532; /* vermelho mais escuro */
  }
`;

const BotaoFacebook = styled(Botao)`
  background-color: #3b5998; 

  &:hover {
    background-color: #2d4373; /* azul mais escuro */
  }
`;

const BotaoGoogle = styled(Botao)`
  margin: 5px 0;
  background-color: #fff; 
  border: 1px solid #f1f1f1;
  color: black; 

  &:hover {
    background-color: #dddddd; /* acinzentado */
  }
`;

const BotaoCriarConta = styled(Botao)`
  background-color: white; 
  color: #000; 
  border: 1px solid #afafaf;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: auto; 
  padding: 8px 16px;
  font-weight: 600;
  
  &:hover {
    background-color: #f5f5f5; /* fundo levemente cinza ao passar o mouse */
    color: #000; 
  }
`;

// Exportando todos os botões
export { BotaoEntrar, BotaoFacebook, BotaoGoogle, BotaoCriarConta };

