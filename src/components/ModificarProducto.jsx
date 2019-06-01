import React, { Component } from "react";
import { connect } from "react-redux";
import { modificarProducto } from "../actions/productosActions";
import { buscarProducto } from "../actions/productosActions";

class ModificarProducto extends Component {
  state = { 
      producto: {
      id:'',
      nombre:'', 
      precio: 0
      }
    };


  changeInput = e => {
    //this.setState({ [e.target.name]: e.target.value });
      this.setState({...this.state, producto:{...this.state.producto, [e.target.name]: e.target.value} }); 
  };



  buscarProducto = ()=>{
    this.props.buscarProducto(this.state.producto.id).then(()=>{

      
      //  this.setState({...this.state.producto, nombre: this.props.producto.nombre, precio: this.props.producto.precio});
      this.setState({...this.state,
        producto: {...this.state.producto, nombre : this.props.producto.nombre, precio: this.props.producto.precio}
      });
        
    });
  }

  guardarCambios = () => {
    console.log( this.state);
    this.props.modificarProducto(this.state).then(()=> this.props.history.push("/")
    );
  };

   
  render() {
    return (
      <div className="container">
        <h2>Modificar Producto</h2>
        <div>
          <label> Id del Producto: </label>
          &nbsp;            
          <input type="text" name="id" onChange={this.changeInput}/>         
          <br></br> 
         <label> Nombre del producto:   </label> 
         &nbsp;    
         <input  type="text" value={this.state.producto.nombre} name="nombre" onChange={this.changeInput}/>            
         <br></br> 
         <label> Precio del producto:   </label> 
         &nbsp;    
         <input type="text" value={this.state.producto.precio} name="precio" onChange={this.changeInput}/>            
         <p></p>   
         &nbsp;             
         <button type="submit" onClick = {this.buscarProducto} className="btn btn-primary">Buscar </button> 
         &nbsp;             
         <button type="submit" onClick={this.guardarCambios} className="btn btn-warning">Modificar </button>  
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
  { buscarProducto, modificarProducto }
)(ModificarProducto);
