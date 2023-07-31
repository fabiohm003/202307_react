import React, { Children } from 'react';
//import './App.css';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';

import { TodoContext, TodoProvider } from '../TodoContext';
import { Modal } from '../Modal';



function App() {

  return (
    <TodoProvider>

      <TodoCounter />

      <TodoSearch />

      <TodoContext.Consumer>
        {({ List, setList, setListList, loading, error, searchedTodos, modifLista, elimLista, Total, Completados, Buscar, setBuscar, openModal, setOpenModal }) => (
            <>
            <TodoList>
            {
              (loading == true) && <TodosLoading />
            }

            {
            /*
              (searchedTodos.length == 0) && <p>¡Crea tu 1er TODO!</p>
              (loading == true && searchedTodos.length == 0) ? <p>¡Crea tu 1er TODO!</p> : <p>¡Tus datos!</p>
            { loading && <p>Cargando....</p> }
            { error && <p>Hay un error....</p> }

            */
            }





            {
            searchedTodos.map(dato => (
            <TodoItem key={dato.text} texto={dato.text} completed={dato.completed} modifLista={modifLista} elimLista={elimLista} />
            ))
            }

            </TodoList>

            <CreateTodoButton />

              <Modal>
                <p>paso paso paso</p>
              </Modal>

              <Modal>
                <h3>qwertyuihgfds</h3>
              </Modal>

              {/*setOpenModal(true)*/}

            {(openModal == true) && (
              <Modal>
                transportar todo
              </Modal>
            )}

            </>
        )}
      </TodoContext.Consumer>

    </TodoProvider>
  );

}

export default App;


