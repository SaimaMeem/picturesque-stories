import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import '../Banner/Banner.css';
import banner1 from '../../../images/banner/1.jpg';
import banner2 from '../../../images/banner/2.jpg';
import banner3 from '../../../images/banner/3.jpg';
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Creating Quality Photos</h3>
                    <p>We shoot people, streets, places, nature - everything that inspires me and makes me shoot and shoot again! </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Emotional Sense of Photography</h3>
                    <p>Our motto is  “Don’t shoot what it looks like. Shoot what it feels like” by David Alan Harvey.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>World Class Photography</h3>
                    <p>
                        Dive into amazing world of lifestyle photography full of emotions, feelings, and personalities. Enjoy this mixture of beauty and creativity!
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;