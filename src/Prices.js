import React from 'react';
import Button from 'react-bootstrap/Button'
import styled from 'styled-components';


const Styles = styled.div`

.liner p{border-bottom:5px solid rgba(0,0,0,.1);
color: black;
text-align: center;}

body {
    margin: 20px;
  }
  
  .table {
    width: 100% content-box;
  }

`

export const Prices = () => (
    <Styles>
            <div class="row mt-5">
        <div class="col liner">
            <p class=""><big class="text-black-100">Cennik</big></p>
        </div>
    </div>
      <div class="table-responsive">
    <table class="table">
    <thead>
      <tr>
        <th>
          Rodzaj Masażu
        </th>
        <th>
          Cena/Czas
        </th>
        <th>
          Uwagi
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          Masaż Sportowy
        </td>
        <td>
          150pln/60min
        </td>
        <td>
        <Button variant="primary" size="lg" block>
          Send a message
        </Button>
        </td>
      </tr>
      <tr>
        <td>
          Masaż Relaksacyjny
        </td>
        <td>
          120pln/60min
        </td>
        <td>
        <Button variant="primary" size="lg" block>
          Send a message
        </Button>
        </td>
      </tr>

      <tr>
        <td>
          Masaż Relaksacyjny
        </td>
        <td>
          120pln/60min
        </td>
        <td>
        <Button variant="primary" size="lg" block>
           Send a message
        </Button>
        </td>
      </tr>

      <tr>
        <td>
          Masaż Relaksacyjny
        </td>
        <td>
          120pln/60min
        </td>
        <td>
        <Button variant="primary" size="lg" block>
          Send a message
        </Button>
        </td>
      </tr>

      <tr>
        <td>
          Masaż Relaksacyjny
        </td>
        <td>
          120pln/60min
        </td>
        <td>
          <Button variant="primary" size="lg" block>
          Send a message
          </Button>
        </td>
      </tr>
      
    </tbody>
  </table>
</div>
    </Styles>

)