import React from 'react';
import logo from './platzi.webp';
//import './App.css';

import { TodoCounter } from './TodoCounter.js';
import { TodoSearch } from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';

import { CreateTodoButton } from './CreateTodoButton';



function App() {

  //let ArrLista = [{null: null, null: null, }];

    //localStorage.setItem('datosLista', JSON.stringify(ArrLista));
  let ArrLista = JSON.parse(localStorage.getItem('datosLista'));

  if (ArrLista == null){

    localStorage.setItem('datosLista', JSON.stringify([]));

    /*
    localStorage.setItem('datosLista', JSON.stringify(
      [
        {text: 'contar ceboollas', completed: true},
        {text: 'tomár curso tomar curso tomar curso tomar curso tomar curso tomar curso', completed: false},
        {text: 'tomar agua', completed: false},
      ]
      ));
    */
    ArrLista = JSON.parse(localStorage.getItem('datosLista'));

  }

  console.log('Datos:', ArrLista);


  /*estados*/
  const [Buscar, setBuscar] = React.useState("");
  
  const [Lista, setLista] = React.useState(ArrLista);


  /*
  const [Lista, setLista] = React.useState(
    [
      {text: 'contar ceboollas', completed: true},
      {text: 'tomár curso tomar curso tomar curso tomar curso tomar curso tomar curso', completed: false},
      {text: 'tomar agua', completed: false},
    ]
  );
  */



  const searchedTodos = Lista.filter(dato => {
    const Reg = new RegExp(Buscar, 'i');
    if (dato.text.match(Reg) != null)
    {
      return dato;
    }
  });


  const saveTodos = function(Lista){
    localStorage.setItem('datosLista', JSON.stringify(Lista));
    setLista(Lista);
    return;
  }



  const modifLista = function(texto, completado){
    let newLista = [...Lista];

    completado == true ? completado = false : completado = true;

    for (const dato in newLista) {
      if (newLista[dato].text == texto) {
        let ob = {text: texto, completed: completado};
        newLista[dato] = ob;
        setLista(newLista);
        return;
      }
    }
  }


  const elimLista = function(texto){
    let newLista = [...Lista];

    for (const dato in newLista) {
      if (newLista[dato].text == texto) {
        newLista.splice(dato, 1);
        setLista(newLista);
        return;
      }
    }
  }



  //filtrar los completados y contar resultado
  const Completados = Lista.filter(dato => dato.completed == true).length;
  //total lista
  const Total = Lista.length;
  //console.log(Completados, Total);


  return (
    <>
      <TodoCounter total={Total} parcial={Completados} />

      <TodoSearch Buscar={Buscar} setBuscar={setBuscar} />

      <TodoList>
      {
        searchedTodos.map(dato => (
          <TodoItem key={dato.text} texto={dato.text} completed={dato.completed} modifLista={modifLista} elimLista={elimLista} />
        ))
      }




        {/*
          console.log(dato)
        <TodoItem />
        <TodoItem />
        */}

      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;


