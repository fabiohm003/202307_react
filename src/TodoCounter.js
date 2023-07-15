import './TodoCounter.css';



function TodoCounter ({total, parcial}){
    return (
      <>
      <h1 className='titulo'>Has completado {parcial} de {total} TODOs</h1>
      </>
    );
  }
  
  
  export {TodoCounter};

