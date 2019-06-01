import React, { Component } from "react";
import { connect } from "react-redux";
import { buscarProducto } from "../actions/productosActions";
//import { Link } from "react-router-dom";


class BuscarProducto extends Component {

  state = { id: '' , nombre:''};

  changeInput = e => {
    this.setState({ id: e.target.value });  
  };

  buscarProducto = ()=>{
    this.props.buscarProducto(this.state.id).then(()=>{
      this.setState({...this.state, nombre: this.props.producto.nombre});
      console.log(this.state);
      
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Buscar Producto</h2>
        <div>
          <label>
            Producto Id:
            <input type="text" name="id" onChange={this.changeInput} />
          </label>
          &nbsp; 
          <p></p>   
          <button type="submit" onClick = {this.buscarProducto} className="btn btn-danger">Buscar </button>
         &nbsp;        
         <input type="text" value={this.state.nombre} name="nombre" onChange={this.changeInput} />
              
        </div>
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    producto: state.productos.producto
  };
};

export default connect(
  mapStateToProp,
  { buscarProducto }
)(BuscarProducto);
