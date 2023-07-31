import React from 'react';
import { TodoContext } from '../TodoContext';

import './TodoCounter.css';


function TodoCounter (){

  const {Total, Completados} = React.useContext(TodoContext);

    return (
      <>
      <h1 className='titulo'>Has completado {Completados} de {Total} TODOs</h1>
      </>
    );
  }
  
  
  export {TodoCounter};

