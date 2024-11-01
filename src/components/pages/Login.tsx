import React, { useState } from 'react';
import { BotaoEntrar, BotaoFacebook, BotaoGoogle, BotaoCriarConta } from '../styled/Botao';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaPinterest } from "react-icons/fa";

import './../styled/Login.css';
import { useNavigate } from 'react-router-dom';

export function Login() { 
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Tentativa de login:', { email, password }); // simulação de login
    // verificao simples + delay para simular o carregamento da página home
    if (email === 'teste@email.com' && password === 'senha123') {
      setTimeout(() => {
        navigate('/home'); 
      }, 1000); 
    } else {
      alert('Dados inválidos!');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 login bg-custom">
      <div className='absolute top-0 left-0 p-4 h-full'>
        <BotaoCriarConta>Criar conta</BotaoCriarConta>
      </div>
      <div className="bg-white rounded-[32px] shadow-md w-100 p-8">
        <div className="flex justify-center p-2">
          <FaPinterest size={50} style={{ color: '#e60023' }} title="Logo do Pinterest" />
        </div>
        <h1 className="text-3xl text-center font-semibold">Faça o login para ver mais</h1>
        <div className="p-6">
          <form className="px-6" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-[12px] border-gray-300 rounded"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // atualiza o estado do e-mail
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="password">
                Senha
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border rounded-[12px] border-gray-300 rounded"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // atualiza o estado da senha
                required
              />
            </div>
            <p className="text-xs mb-4">
              <a href="#" className="text-xs hover:underline font-semibold">Esqueceu a senha?</a>
            </p>
            <button type="submit" className="w-full">
              <BotaoEntrar>Entrar</BotaoEntrar>
            </button>
            <p className="font-semibold mb-4 text-center">OU</p>
            <BotaoFacebook><FaFacebook size={35} className='inline-flex mr-4' /><span className='inline-flex'>Continuar com o Facebook</span></BotaoFacebook>
            <BotaoGoogle><FcGoogle size={35} className='inline-flex mr-8' /><span className='inline-flex'>Continuar com o Google</span></BotaoGoogle>
          </form>
        </div>
        <div className='w-96 px-6'>
          <p className="texto-container text-center text-xs">
            Ao continuar, você concorda com os <a href="#" className="link">Termos de Serviço</a> do Pinterest e confirma que leu nossa <a href="#" className="link">Política de Privacidade</a>.
            <a href="#" className="link"> Aviso na coleta de informações</a>.
          </p>
          <hr className="linha text-center justify-center" />
          <p className='text-xs text-center'>
            Ainda não está no Pinterest? <a href="#" className="link">Crie uma conta</a>.
          </p>
          <p className='text-xs text-center'>
            Você é uma empresa? <a href="#" className="link">Comece aqui!</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;