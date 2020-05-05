import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from  'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Prices } from './Prices';
import { Gallery } from './Gallery';
import { Contact } from './Contact';
import { NoExist } from './NoExist';
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar';
import { ZigZag } from './components/ZigZag'
import { Jumbotron } from './components/Jumbotron';
import { Footer } from './components/Footer';

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron/>
        <ZigZag/>
        <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Gallery" component={Gallery}/>
            <Route path="/Prices" component={Prices}/>
            <Route path="/Contact" component={Contact}/>
            <Route component={NoExist} />
          </Switch>
        </Router>
        </Layout>
        <Footer/>
      </React.Fragment>
    )
  }
}


export default App;


// import React from 'react';
// import styled from 'styled-components';
// import Carousel from 'react-bootstrap/Carousel'
// import "./assets/comp.jpg";

// const Styles = styled.div`

// img {
//   h2{
//     margin: 0;     
//     color: #666;
//     padding-top: 90px;
//     font-size: 52px;
//     font-family: "trebuchet ms", sans-serif;    
// }

// .item{
//     background: white;    
//     text-align: center;
//     height: 300px !important;
// }

// .carousel{
//     margin-top: 20px;
// }

// .bs-example{
// 	margin: 20px;
// }

// .carousel.carousel-fade .item {
//   opacity:0;
//   filter: alpha(opacity=0); /* ie fix */
// }

// .carousel.carousel-fade .active.item {
//     opacity:1;
//     filter: alpha(opacity=100); /* ie fix */
// }

// `
// ;

// export const Gallery = () => (
// <div class="bs-example">
//     <div id="myCarousel" class="carousel slide" data-interval="6500" data-ride="carousel">
//         <ol class="carousel-indicators">
//             <li data-target="#myCarousl" data-slide-to="0" class="active"></li>
//             <li data-target="#myCarousel" data-slide-to="1"></li>
//             <li data-target="#myCarousel" data-slide-to="2"></li>
//         </ol>   

//         <div class="carousel-inner">
//             <div class="active item carousel-fade">
//                 <h2><a><img src="https://cdn.pixabay.com/photo/2017/04/02/19/23/environment-2196690_1280.jpg" alt="slide1"></img></a></h2>
                
//                 <div class="carousel-caption">
//                   <h3>First slide label</h3>
                  
//                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </div>
//             </div>
//             <div class="item carousel-fade">
//                 <h2><a><img src="https://cdn.pixabay.com/photo/2013/07/18/20/26/boat-164989_1280.jpg" alt="slide2"></img></a></h2>
//                 <div class="carousel-caption">
//                   <h3>Second slide label</h3>
//                   <p>Aliquam sit amet gravida nibh, facilisis gravida odio.</p>
//                 </div>
//             </div>
//             <div class="item carousel-fade">
//                 <h2><a><img src="https://cdn.pixabay.com/photo/2014/02/23/02/56/forest-272595_1280.jpg" alt="slide3"></img></a></h2>
//                 <div class="carousel-caption">
//                   <h3>Third slide label</h3>
//                   <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                 </div>
//             </div>
//         </div>
 
//         <a class="carousel-control left" href="#myCarousel" data-slide="prev">
//             <span class="glyphicon glyphicon-chevron-left"></span>
//         </a>
//         <a class="carousel-control right" href="#myCarousel" data-slide="next">
//             <span class="glyphicon glyphicon-chevron-right"></span>
//         </a>
//     </div>
// </div>
// );