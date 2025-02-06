import React from 'react';
import CardsProducts from '../../components/cards/CardsProducts';

const Produtos: React.FC = () => {
    return (
        <div className="bg-[#EDEDED] min-h-screen p-4">
            <div className="container mx-auto">
                {/* Layout responsivo usando grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                    {/* Coluna de filtros */}
                    <div className="col-span-1">
                        <div className="ml-4 md:ml-9 mb-2">
                            <p className="text-left text-base text-black">
                                Instrumentos Musicais &gt; Instrumentos de Corda
                            </p>
                        </div>
                        <div className="ml-4 md:ml-9 mb-2">
                            <h2 className="text-left text-2xl font-bold text-black">
                                Violoncelo
                            </h2>
                        </div>
                        {/* Filtro "Chegam amanhã" */}
                        <div className="ml-4 md:ml-9">
                            <div className="bg-white border border-[#cecece] rounded-lg p-2 w-full md:w-[80%] lg:w-[60%] flex justify-between items-center">
                                <p className="text-left text-base font-bold text-black">
                                    Chegam amanhã
                                </p>
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                            </div>
                        </div>
                        {/* Filtro "Frete grátis" */}
                        <div className="ml-4 md:ml-9 mt-2">
                            <div className="bg-white border border-[#cecece] rounded-lg p-2 w-full md:w-[80%] lg:w-[60%] flex justify-between items-center">
                                <p className="text-left text-base font-bold text-black">
                                    Frete grátis
                                </p>
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                            </div>
                        </div>
                        {/* Filtro "Condição" */}
                        <div className="my-3 ml-4 md:ml-9">
                            <h3 className="text-left text-xl font-bold text-black">
                                Condição
                            </h3>
                            <p className="text-left text-sm text-black">
                                Novo (393)
                            </p>
                            <p className="text-left text-sm text-black">
                                Usado (4)
                            </p>
                        </div>
                        {/* Filtro "Preço" */}
                        <div className="my-3 ml-4 md:ml-9">
                            <h3 className="text-left text-xl font-bold text-black">
                                Preço
                            </h3>
                            <p className="text-left text-sm text-black">
                                Até R$350
                            </p>
                            <p className="text-left text-sm text-black">
                                R$350 a R$3.500
                            </p>
                            <p className="text-left text-sm text-black">
                                Mais de R$3.500 (134)
                            </p>
                            <div className="flex justify-start my-2">
                                <input
                                    type="text"
                                    placeholder="Mínimo"
                                    className="bg-white border border-gray-300 rounded-md p-1 w-1/2 mr-2"
                                />
                                <span>_</span>
                                <input
                                    type="text"
                                    placeholder="Máximo"
                                    className="bg-white border border-gray-300 rounded-md p-1 w-1/2 ml-2"
                                />
                            </div>
                        </div>
                        {/* Filtro "Tempo de entrega" */}
                        <div className="my-3 ml-4 md:ml-9">
                            <h3 className="text-left text-xl font-bold text-black">
                                Tempo de entrega
                            </h3>
                            <p className="text-left text-sm text-black">
                                Chegará em menos de 24h (6)
                            </p>
                        </div>
                    </div>
                    {/* Coluna de produtos */}
                    <div className="col-span-1 lg:col-span-3">
                        <CardsProducts />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Produtos;