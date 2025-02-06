import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="mt-20 mb-3 px-4 sm:px-6 lg:px-8">
            {/* Links do Footer */}
            <div className="flex flex-wrap justify-start gap-2 sm:gap-4 sm:ml-28">
                <button className="text-gray-700 text-sm mx-2 hover:text-gray-900">
                    Trabalhe conosco
                </button>
                <button className="text-gray-700 text-sm mx-2 hover:text-gray-900">
                    Termos e condições
                </button>
                <button className="text-gray-700 text-sm mx-2 hover:text-gray-900">
                    Como cuidamos da sua privacidade
                </button>
                <button className="text-gray-700 text-sm mx-2 hover:text-gray-900">
                    Contato
                </button>
                <button className="text-gray-700 text-sm mx-2 hover:text-gray-900">
                    Informações sobre seguros
                </button>
            </div>

            {/* Texto de Copyright */}
            <div className="flex justify-start sm:ml-28 mt-4">
                <p className="text-gray-700 text-sm text-justify">
                    Copyright © 1999-2022 Ebazar.com.br LTDA
                </p>
            </div>

            {/* Informações da Empresa */}
            <div className="flex justify-start sm:ml-28 mt-2">
                <p className="text-gray-700 text-sm text-justify">
                    CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas, nº 3.003, Bonfim, Osasco/SP - CEP 06233-903 - empresa do grupo Mercado Livre
                </p>
            </div>
        </div>
    );
};

export default Footer;