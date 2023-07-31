import React from 'react';
import { TodoContext } from '../TodoContext';

import './TodoSearch.css';



function TodoSearch (){

  const {Buscar, setBuscar} = React.useContext(TodoContext);

    return (
      <>
      <section className="buscar">
        <input type='text' 
        placeholder='Realizar Búsqueda' 
        value={Buscar}
        onChange={(event) => filtrar(event, setBuscar)}
        />
      </section>
      </>
    );
  }
  

  function filtrar (event, setBuscar){
    setBuscar(event.target.value);
    console.log(event.target.value);
  }
  

  export {TodoSearch};
