import React from 'react';
import CarouselCategoria from '../../components/statics/carouselCategoria/CarouselCategoria';
import CarouselPromo from '../../components/statics/carouselPromo/CarouselPromo';

const Home: React.FC = () => {
    return (
        <>
            {/* Carrossel de Promoções */}
            <CarouselPromo />

            {/* Título 1 */}
            <div className="m-2">
                <h6 className="text-center text-xl font-semibold">
                    O DIA DOS NAMORADOS CHEGOU COM TUDO NO MERCADO LIVRE 💖
                </h6>
            </div>

            {/* Imagens em linha */}
            <div className="m-2 flex justify-center">
                {[
                    'https://http2.mlstatic.com/D_NQ_NP717617-MLA50150847222_052022-B.webp',
                    'https://http2.mlstatic.com/D_NQ_NP616277-MLA50150817562_052022-B.webp',
                    'https://http2.mlstatic.com/D_NQ_NP928432-MLA50150808729_052022-B.webp',
                    'https://http2.mlstatic.com/D_NQ_NP988325-MLA50169943240_062022-B.webp',
                ].map((src, index) => (
                    <div key={index} className="w-1/4 m-1 rounded-2xl overflow-hidden">
                        <button className="w-full">
                            <img
                                src={src}
                                alt={`Promoção ${index + 1}`}
                                className="w-full h-auto"
                            />
                        </button>
                    </div>
                ))}
            </div>

            {/* Título 2 */}
            <div className="m-2">
                <h6 className="text-center text-xl font-semibold">
                    NÃO PERCA AS LIVES DO DIA DOS NAMORADOS 💘
                </h6>
            </div>

            {/* Imagem única */}
            <div className="m-2 flex justify-center">
                <button>
                    <img
                        src="https://http2.mlstatic.com/D_NQ_NP_992599-MLA50235183979_062022-OO.webp"
                        alt="Live Dia dos Namorados"
                        className="rounded-2xl"
                    />
                </button>
            </div>

            {/* Título 3 */}
            <div className="m-2">
                <h6 className="text-center text-xl font-semibold">
                    TEM PRESENTE PRA VOCÊ, PRO MOZÃO....
                </h6>
            </div>

            {/* Imagem única */}
            <div className="m-2 flex justify-center">
                <button>
                    <img
                        src="https://http2.mlstatic.com/D_NQ_NP_830079-MLA50140701967_052022-OO.webp"
                        alt="Presente Dia dos Namorados"
                        className="rounded-2xl"
                    />
                </button>
            </div>

            {/* Título 4 */}
            <div className="m-2">
                <h6 className="text-center text-xl font-semibold">
                    ...E PRA TODOS OS BOLSOS! 👀
                </h6>
            </div>

            {/* Imagens em linha */}
            <div className="m-2 flex justify-center">
                {[
                    'https://http2.mlstatic.com/D_NQ_NP937439-MLA50162808786_062022-B.webp',
                    'https://http2.mlstatic.com/D_NQ_NP710090-MLA50162883135_062022-B.webp',
                    'https://http2.mlstatic.com/D_NQ_NP735944-MLA50162808823_062022-B.webp',
                    'https://http2.mlstatic.com/D_NQ_NP635998-MLA50162865319_062022-B.webp',
                ].map((src, index) => (
                    <div key={index} className="w-1/4 m-1 rounded-2xl overflow-hidden">
                        <button className="w-full">
                            <img
                                src={src}
                                alt={`Oferta ${index + 1}`}
                                className="w-full h-auto"
                            />
                        </button>
                    </div>
                ))}
            </div>

            {/* Imagens em linha */}
            <div className="m-2 flex justify-center">
                {[
                    'https://http2.mlstatic.com/D_NQ_NP_971318-MLA50140804823_052022-OO.webp',
                    'https://http2.mlstatic.com/D_NQ_NP_994430-MLA50140799938_052022-OO.webp',
                ].map((src, index) => (
                    <div key={index} className="w-1/2 m-1 rounded-2xl overflow-hidden">
                        <button className="w-full">
                            <img
                                src={src}
                                alt={`Oferta ${index + 1}`}
                                className="w-full h-auto"
                            />
                        </button>
                    </div>
                ))}
            </div>

            {/* Título 5 */}
            <div className="m-2">
                <h6 className="text-center text-xl font-semibold">
                    MAIS OFERTAS PRA APROVEITAR
                </h6>
            </div>

            {/* Carrossel de Categorias */}
            <CarouselCategoria />

            {/* Botão "Ver mais ofertas" */}
            <div className="m-3 flex justify-center">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg text-lg font-semibold">
                    Ver mais ofertas
                </button>
            </div>

            {/* Seção de Dúvidas Frequentes */}
            <div className="m-2 mt-12">
                <div className="m-2">
                    <h4 className="text-center text-3xl font-bold">
                        Dúvidas frequentes - Dia dos Namorados 2022
                    </h4>
                </div>

                {[
                    {
                        question: 'O que é o Dia dos Namorados?',
                        answer: 'No Brasil, há muitas décadas, em 12 de junho comemora-se o Dia dos Namorados. Essa data faz referência ao amor, ao afeto e ao carinho entre casais. Nesse dia os casais trocam presentes e costumam jantar em restaurantes. Em outros países, há também um dia específico que tem o mesmo propósito.',
                    },
                    {
                        question: 'Como surgiu o Dia dos Namorados?',
                        answer: 'A comemoração do dia dos namorados não era uma tradição no Brasil, a data começou a ser celebrada depois de uma campanha publicitária realizada em 1949. Naquele ano, o publicitário João Dória, diretor da Agência Standard Propaganda, criou uma campanha comercial para a loja Clipper, que costumava ter baixo volume de vendas no mês de junho. O dia 12 foi escolhido por ser a véspera do dia de Santo Antônio, o santo casamenteiro.',
                    },
                    {
                        question: 'Quando é o Dia dos Namorados 2022?',
                        answer: 'O Dia dos Namorados em 2022 é em 12 de junho. Aqui no Mercado Livre, o Dia dos Namorados acontece a partir do dia 01 de junho. Você encontra ofertas incríveis com até 60% de desconto e envios grátis e rápidos em milhares de produtos. É a oportunidade perfeita pra encontrar uma presente pro mozão :)',
                    },
                    {
                        question: 'Quais são as formas de pagamento?',
                        answer: 'Você pode realizar o pagamento das suas compras com boleto bancário, cartão de crédito, cartão de débito virtual, transferência bancária, pix, Mercado Crédito ou utilizar o saldo da sua conta do Mercado Pago. Veja mais.',
                    },
                    {
                        question: 'Qual valor do frete?',
                        answer: 'Você pode contar com a entrega mais rápida do Brasil com frete grátis a partir de R$79**. Receba sua compra de onde estiver ou retire em uma agência Mercado Livre.',
                    },
                ].map((item, index) => (
                    <div key={index} className="m-2">
                        <h6 className="text-left text-xl font-semibold">
                            {item.question}
                        </h6>
                        <p className="text-justify text-lg">
                            {item.answer}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home;