import logo from './platzi.webp';
//import './App.css';

import { TodoCounter } from './TodoCounter.js';
import { TodoSearch } from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';

import { CreateTodoButton } from './CreateTodoButton';



const defaultTodos = [
  {text: 'contar ceboollas', completed: true},
  {text: 'tomar curso tomar curso tomar curso tomar curso tomar curso tomar curso', completed: false},
  {text: 'tomar agua', completed: false},
];


function App() {
  return (
    <>
      <TodoCounter total={25} parcial={7} />

      <TodoSearch />
      <TodoList>

      {
        defaultTodos.map(dato => (
          <TodoItem key={dato.text} texto={dato.text} completed={dato.completed} />
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


