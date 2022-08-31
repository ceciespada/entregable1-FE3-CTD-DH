import React from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import { useState } from 'react';

// El componente App es el padre de:
// - Cabecera OK
// - Listado OK
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados. OK
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App() {

  const [contador, setContador] = useState(0);

  const contadorCarrito = () => {
    setContador(contador +1)
  }

  return (
    <div className="App">
      <Cabecera contadorIni ={contador}/>
      <Listado contadorCarrito={contadorCarrito}/>
    </div>
  );
}

export default App;
