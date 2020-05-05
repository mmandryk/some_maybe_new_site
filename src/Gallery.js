import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';


import Image1 from './assets/1.jpg';
import Image2 from './assets/2.jpg';
import Image3 from './assets/3.jpg';
import Image4 from './assets/4.jpg';



const Styles = styled.div`

.image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;rs
}
.carousel-control-next,
.carousel-control-prev {
    filter: invert(100%);
}
`
;

export const Gallery = () => (
  <Styles>
  <Carousel>
  <Carousel.Item>
    <Image className='image'
      src={Image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image"
      src={Image2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image"
      src={Image3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image"
      src={Image4}
      alt="fourth slide"
    />

    <Carousel.Caption>
      <h3>Fourth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Styles>
);