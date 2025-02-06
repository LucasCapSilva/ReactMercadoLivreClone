import React from 'react';
import { Link } from 'react-router-dom';
import MenuNav from './menuNav/MenuNav'; // Certifique-se de que o componente MenuNav está adaptado para Tailwind

const NavBar: React.FC = () => {
  return (
    <nav className="bg-primary-main shadow-md">
      {/* Primeira linha da barra de navegação */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4">
        {/* Logo */}
        <div className="mx-5 mb-4 md:mb-0">
          <Link to="/home">
            <img
              src="https://oombe.com/assets/img/mercadolivre_nova_logo.png"
              alt="Logo"
              className="w-40 h-15"
            />
          </Link>
        </div>

        {/* Componente MenuNav */}
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <MenuNav />
        </div>

        {/* Avatar e Botão de Assinatura */}
        <div className="ml-auto flex items-center">
          <button className="ml-4 text-black hover:text-gray-200 whitespace-nowrap">
            Assine o nível 6 por R$ 9,90
          </button>
        </div>
      </div>

      {/* Segunda linha da barra de navegação */}
      <div className="container mx-auto flex flex-col md:flex-row items-center p-4">
        {/* Endereço */}
        <div className="mx-5 mb-4 md:mb-0">
          <button className="text-black hover:text-gray-200">Endereço</button>
        </div>

        {/* Links de Navegação */}
        <div className="ml-7 flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
          <Link to="/produtos">
            <button className="text-black hover:text-gray-200 cursor-pointer">
              Produtos
            </button>
          </Link>
          <button className="text-black hover:text-gray-200">Oferta do dia</button>
          <button className="text-black hover:text-gray-200">Supermercado</button>
          <button className="text-black hover:text-gray-200">Moda</button>
          <button className="text-black hover:text-gray-200">Live</button>
          <button className="text-black hover:text-gray-200">Vender</button>
          <button className="text-black hover:text-gray-200">Contato</button>
          <button className="text-black hover:text-gray-200">User</button>
          <button className="text-black hover:text-gray-200">Compras</button>
          <button className="text-black hover:text-gray-200">Supermercado</button>
          <button className="text-black hover:text-gray-200">Favoritos</button>
        </div>

     
      </div>
    </nav>
  );
};

export default NavBar;
