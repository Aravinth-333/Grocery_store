import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const CarouselBanner = () => {
  return (
    <Container fluid className="px-0">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thumbs.dreamstime.com/b/stalls-apples-price-tag-carousel-hypermarket-st-petersburg-russia-october-food-products-109699058.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.kinja-img.com/gawker-media/image/upload/ttz14wkmkdc8fgjkentk.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default CarouselBanner;
