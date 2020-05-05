import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/tree.jpg'

const Styles = styled.div`
@import "lesshat";

@import url(https://fonts.googleapis.com/css?family=Open+Sans);

.container{   
  width: 200px;
  height: 200px;
  position: absolute;
  //left: 0;
  right: 60px;
  margin: 0 auto;
  top:57px;
}

.div-img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    .img{
        display:block;
        margin-left: auto;
        margin-right: auto;
        width: 200px;
        height: 200px;
        border-radius: 150px;
        -webkit-border-radius: 150px;
        -moz-border-radius: 150px;   
        transform:translate(0px);
        -ms-transform:translate(0px); // IE 9 
        -moz-transform:translate(0px); // Firefox 
        -webkit-transform:translate(0px); // Safari and Chrome 
        -o-transform:translate(0px); // Opera 
        -webkit-transition: all 500ms ease-in-out; // IE 9
        -moz-transition: all 500ms ease-in-out; // Firefox
        -ms-transition: all 500ms ease-in-out; // Safari and Chrome 
        -o-transition: all 500ms ease-in-out; // Opera    
    }      
    .text{
        font-size: x-large;
        color: white;
        position:absolute;
        z-index: -1;
        display:block;
        height: 50%;
        top:50%;
        right:0;
        padding-right:5px;
    }
    &:hover{
        .img{
            transform:translate(-200px,0px);
            -ms-transform:translate(-200px,0px); // IE 9 
            -moz-transform:translate(-200px,0px); // Firefox 
            -webkit-transform:translate(-200px,0px); // Safari and Chrome 
            -o-transform:translate(-200px,0px); // Opera
        }
     } 
}
`;

export const ZigZag = () => (
    <div class="d-none d-lg-block d-print-block">
            <Styles>
        <div class="container">
            <div class="div-img" >
                <img class="img" src={Logo} no-repeat alt=""></img>
                <div class="text">Company name</div>
            </div>
        </div>
    </Styles>
    </div>


)