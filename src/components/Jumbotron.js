import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
//import Spa_big from '../assets/Spa_big.jpg';
import Industry_Nature from '../assets/jumbotron2.jpg'

const Styles = styled.div`
  .jumbo {
    background: url(${Industry_Nature}) no-repeat top;
    background-size: cover;
    color: #ffffe6;
    height: 200px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Lorem Ipsum
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
        <p> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Container>
    </Jumbo>
  </Styles>
)