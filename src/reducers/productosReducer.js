import { MOSTRAR_PRODUCTOS, GUARDAR_PRODUCTO, BUSCAR_PRODUCTO, MODIFICAR_PRODUCTO } from "../actions/types";

const estadoInicial = {
  productos: []
};


export default function(state = estadoInicial, action) {
  switch (action.type) {
    case MOSTRAR_PRODUCTOS:
      return { ...state, productos: action.payload };

    case GUARDAR_PRODUCTO:
      return { ...state, productos: [...state.productos, action.payload] };
    
    case BUSCAR_PRODUCTO:
      return { ...state, producto: action.payload};
      
    case MODIFICAR_PRODUCTO:          
      return { ...state, producto:  action.payload} ;
    
    default:
  
  
    
      return state;    
      
  }
}
