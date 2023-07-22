import './TodoSearch.css';

function TodoSearch (props){

    return (
      <>
      <section className="buscar">
        <input type='text' 
        placeholder='Realizar Búsqueda' 
        value={props.Buscar}
        onChange={(event) => filtrar(event, props.setBuscar)}
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
