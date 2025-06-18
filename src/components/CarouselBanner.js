import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const CarouselBanner = () => {
  return (
    <Container fluid className="px-0">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="C:\Users\aravi\OneDrive\Desktop\Organic-Store\organic_store\src\components\Images\1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./Images/2.png"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default CarouselBanner;
