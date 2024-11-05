"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post('http://localhost:8080/login', { username, password });
      router.push('/produtos');
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Login falhou! Verifique suas credenciais.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-10 space-y-6">
        <h2 className="text-4xl font-bold text-center text-blue-600">Bem-vindo</h2>
        <p className="text-center text-gray-600">Faça login para acessar o sistema</p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-700 font-semibold mb-2">
              Usuário
            </label>
            <input
              type="text"
              id="username"
              placeholder="Digite seu usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="h-14 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-700 font-semibold mb-2">
              Senha
            </label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-14 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className={`w-full py-3 rounded-md text-white font-semibold transition ${
                loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
              }`}
              disabled={loading}
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
