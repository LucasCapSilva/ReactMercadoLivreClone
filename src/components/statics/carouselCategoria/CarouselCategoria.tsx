import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselCategoria: React.FC = () => {
    return (
        <>
            <Carousel indicators={false}>
                {[1, 2, 3].map((_, index) => (
                    <Carousel.Item key={index} interval={1000}>
                        <div className="flex justify-center">
                            {[
                                { name: 'Beleza', src: 'https://http2.mlstatic.com/D_Q_NP_865921-MLA50206226430_062022-G.webp' },
                                { name: 'Moda', src: 'https://http2.mlstatic.com/D_Q_NP_808546-MLA50113270485_052022-G.webp' },
                                { name: 'Esporte', src: 'https://http2.mlstatic.com/D_Q_NP_973177-MLA50113322166_052022-G.webp' },
                                { name: 'Suplemento', src: 'https://http2.mlstatic.com/D_Q_NP_617469-MLA50113273509_052022-G.webp' },
                                { name: 'Eletrônicos', src: 'https://http2.mlstatic.com/D_Q_NP_852775-MLA50113273533_052022-G.webp' },
                                { name: 'Eletroportáteis', src: 'https://http2.mlstatic.com/D_Q_NP_881076-MLA50113270638_052022-G.webp' },
                                { name: 'Eletrodomésticos', src: 'https://http2.mlstatic.com/D_Q_NP_785678-MLA50113322324_052022-G.webp' },
                                { name: 'Smartphones', src: 'https://http2.mlstatic.com/D_Q_NP_752943-MLA50113273673_052022-G.webp' },
                            ].map((item, i) => (
                                <div key={i} className="m-2">
                                    <button className="text-inherit">
                                        <div>
                                            <div className="flex justify-center">
                                                <img
                                                    alt={item.name}
                                                    src={item.src}
                                                    className="w-24 h-24 rounded-full"
                                                />
                                            </div>
                                            <p className="text-center text-base text-black">
                                                {item.name}
                                            </p>
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
};

export default CarouselCategoria;