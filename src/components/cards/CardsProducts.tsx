import React, { useState } from 'react';



const CardsProducts = () => {
  const [cards] = useState<Card[]>([
    { id: 1, titulo: "Violoncelo Custom 4/4 Arco E Breu Com Case", preco: '2.000', img: "https://http2.mlstatic.com/D_NQ_NP_996545-MLB45042145148_032021-W.webp" },
    { id: 2, titulo: "Violoncelo Custom 3/4 Arco E Breu Com Case", preco: '3.500', img: "https://http2.mlstatic.com/D_NQ_NP_718197-MLB49985316043_052022-W.webp" },
    { id: 3, titulo: "Violoncelo Custom 4/4 Arco E Breu Com Case", preco: '4.000', img: "https://http2.mlstatic.com/D_NQ_NP_742546-MLB43496316374_092020-W.webp" },
    { id: 4, titulo: "Violoncelo Custom 4/4 Arco E Breu Com Case", preco: '1.800', img: "https://http2.mlstatic.com/D_NQ_NP_785478-MLB43555120435_092020-W.webp" },
    { id: 5, titulo: "Violoncelo Custom 4/4 Arco E Breu Com Case", preco: '5.000', img: "https://http2.mlstatic.com/D_NQ_NP_997230-MLB44938028891_022021-W.webp" },
    { id: 6, titulo: "Violoncelo Custom 4/4 Arco E Breu Com Case", preco: '4.765', img: "https://http2.mlstatic.com/D_NQ_NP_869318-MLB41840058854_052020-W.webp" },
    { id: 7, titulo: "Violoncelo Custom 4/4 Arco E Breu Com Case", preco: '4.765', img: "https://http2.mlstatic.com/D_NQ_NP_869318-MLB41840058854_052020-W.webp" },
    { id: 8, titulo: "Violoncelo Custom 4/4 Arco E Breu Com Case", preco: '4.765', img: "https://http2.mlstatic.com/D_NQ_NP_869318-MLB41840058854_052020-W.webp" },
  ]);

  return (
    <div className="flex flex-wrap justify-center p-2">
      {cards.map((card) => (
        <button
          key={card.id}
          className="m-1 text-left transition-transform hover:scale-105 focus:outline-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
        >
          <div className="w-full bg-white border border-[#cecece] rounded-lg px-5 py-4">
            <img
              src={card.img}
              alt={card.titulo}
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg"
            />
            
            <div className="p-1 mb-2">
              <h6 className="text-lg font-bold text-black">
                R${card.preco}
              </h6>
              <p className="text-[#2FB670]">
                Frete grátis
              </p>
              <p className="text-black">
                {card.titulo}
              </p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default CardsProducts;