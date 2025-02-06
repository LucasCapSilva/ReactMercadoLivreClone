import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselPromo: React.FC = () => {
    return (
        <>
            <Carousel indicators={false}>
                {[
                    { src: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1654699507609-home-sliderdesktop.jpg', alt: 'First slide' },
                    { src: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1654743839951-home-sliderdesktop11.jpg', alt: 'Second slide' },
                    { src: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1654743934535-main-slider-desktop9.jpg', alt: 'Third slide' },
                    { src: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1654743997495-12381gpahome-sliderdesktop.jpg', alt: 'Fourth slide' },
                    { src: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1654744049821-home-sliderdesktop30.jpg', alt: 'Fifth slide' },
                    { src: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1654744117316-home-sliderdesktop31.jpg', alt: 'Sixth slide' },
                    { src: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1654744196218-home-sliderdesktop32.jpg', alt: 'Seventh slide' },
                ].map((item, index) => (
                    <Carousel.Item key={index} interval={index === 0 ? 1000 : 500}>
                        <img
                            className="d-block w-100"
                            src={item.src}
                            alt={item.alt}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
};

export default CarouselPromo;