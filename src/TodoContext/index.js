import React from "react";

import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();



function TodoProvider ({ children }){


  /*estados*/
  const [Buscar, setBuscar] = React.useState("");

  const [List, setList, setListList, loading, error] = useLocalStorage('datosLista', []);
  
  const [openModal, setOpenModal] = React.useState(false);


  console.log("x1");
  React.useEffect(() => {console.log("effect xxx");}, [List]);
  console.log("x2");
  console.log("x3");



  const searchedTodos = List.filter(dato => {
    const Reg = new RegExp(Buscar, 'i');
    if (dato.text.match(Reg) != null)
    {
      return dato;
    }
  });



  const modifLista = function(texto, completado){
    let newLista = [...List];

    completado == true ? completado = false : completado = true;

    for (const dato in newLista) {
      if (newLista[dato].text == texto) {
        let ob = {text: texto, completed: completado};
        newLista[dato] = ob;
        setList(newLista);
        return;
      }
    }
  }


  const elimLista = function(texto){
    let newLista = [...List];

    for (const dato in newLista) {
      if (newLista[dato].text == texto) {
        newLista.splice(dato, 1);
        setList(newLista);
        return;
      }
    }
  }



  //filtrar los completados y contar resultado
  const Completados = List.filter(dato => dato.completed == true).length;
  //total lista
  const Total = List.length;
  //console.log(Completados, Total);
 

  return (
    <TodoContext.Provider value={{List, setList, setListList, loading, error, searchedTodos, modifLista, elimLista, Total, Completados, Buscar, setBuscar, openModal, setOpenModal }} >
      { children }
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

