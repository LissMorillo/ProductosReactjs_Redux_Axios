import React, { Component } from "react";

class Producto extends Component {
  render() {
    const { producto } = this.props;

    return(
      <table class = "table table-striped table-dark">
        <thead>
          <tr>
            <th  scope="col" width="20" >
            <td >Id</td>
            </th>
            <th scope="col" width="10vh">
            <td >Nombre</td>
            </th>
          </tr>
        </thead>

        <tbody>
         <tr class = "table-primary">
           <th scope="col" width="20">{producto.id}</th>
           <th scope="col" width="20vh">{producto.nombre}</th>
         </tr>
         
        </tbody>
      </table>
    );

    /*return (
      <li>
        <p >{producto.id}</p>
        <p >{producto.nombre}</p>
        
      </li>
    );*/
  }
}

export default Producto;
