import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Productos from "./components/Productos";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NoRuta from "./components/NoRuta";
import NuevoProducto from "./components/NuevoProducto";
import EliminarProducto from "./components/EliminarProducto";
import BuscarProducto from "./components/BuscarProducto";
import ModificarProducto  from "./components/ModificarProducto";


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <h1></h1>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProducto} />
            <Route exact path="/productos/eliminar" component={EliminarProducto} />
            <Route exact path="/productos/buscar" component={BuscarProducto} />
            <Route exact path="/productos/modificar" component={ModificarProducto} />
            <Route component={NoRuta} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
