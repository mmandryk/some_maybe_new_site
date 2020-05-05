import React from 'react';
import styled from 'styled-components';
import Jumbotron2 from '../assets/jumbotron2.jpg'
const Styles = styled.div`

.footer{
  background: url(${Jumbotron2}) no-repeat top;
  background-size: cover;
  color: #ffffe6;
  position: relative;
  z-index: -2;
    
    .links{
      ul {list-style-type: none;}
      li a{
        color: black;
        transition: color .2s;
        &:hover{
          text-decoration:none;
          color:black;
          }
      }
    }  
    .about-company{
      -webkit-box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.5);
      -moz-box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.5);
      box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.5);
      i{font-size: 25px;}
      a{
        color:black;
     
        &:hover{color:black}
      }
      p{
        font-size: 18px;
      }
    } 
    .location{
      -webkit-box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.5);
      -moz-box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.5);
      box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.5);
      i{font-size: 18px;}
    }
    .copyright
     p{
       border-top:1px solid rgba(0,0,0,.1);
       -webkit-box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.5);
       -moz-box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.5);
       box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.5);} 
  }
`
;

export const Footer = () => (
    <Styles>
        <div class="mt-5 pt-5 pb-5 footer">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-xs-12 about-company">
                <h2>Lorem Ipsum</h2>
                <h5 class=" text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>
                {/* <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p> */}
              </div>
              <div class="col-lg-4 col-xs-12 links">

              </div>
              <div class="col-lg-4 col-xs-12 location">
                <h4 class="mt-lg-0 mt-sm-4">Location</h4>
                <p>22, Lorem ipsum dolor, </p>
                <p>consectetur adipiscing</p>
                <p class="mb-0"><i class="fa fa-phone mr-3"></i>541 754 010</p>
                <p><i class="fa fa-envelope-o mr-3"></i>company_name@company_name.com</p>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col copyright">
                <p class=""><small class="text-white">EmAppsNow@gmail.com © 2020. All Rights Reserved.</small></p>
              </div>
            </div>
          </div>
        </div>
    </Styles>
);