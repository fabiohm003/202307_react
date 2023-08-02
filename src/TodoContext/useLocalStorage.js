import React from "react";




export function useLocalStorage(nombreItem, vlrInicialItem){


  const [Lista, setLista] = React.useState(vlrInicialItem);

  let ArrLista = JSON.parse(localStorage.getItem(nombreItem));

  const [loading, setLoading] = React.useState(true);

  const [error, setError] = React.useState(false);


  React.useEffect(() => {

    setTimeout(() => {

      try {
        //if (ArrLista == null || ArrLista.length == 0){}

        const arreglo =
        [
            {text: 'contar ceboollas', completed: true},
            {text: 'tomár curso tomar curso tomar curso tomar curso tomar curso tomar curso', completed: false},
            {text: 'tomar agua', completed: false},
        ];

        vlrInicialItem = arreglo;

        localStorage.setItem(nombreItem, JSON.stringify(vlrInicialItem));
    
        ArrLista = JSON.parse(localStorage.getItem(nombreItem));

        setLista(ArrLista);

        console.log("setLista(ArrLista)");
       
        setLoading(false);

      } catch (error) {
        setLoading(false);
        setError(false);
      }


    }, 3000 );


  }, []); //end useEffect




  const saveTodos = function(Lista){
    localStorage.setItem(nombreItem, JSON.stringify(Lista));
    setLista(Lista);
    return;
  }

  const saveTodosTodos = function(Lista){
    localStorage.setItem(nombreItem, JSON.stringify(Lista));
    setLista(Lista);
    return;
  }


  return [Lista, saveTodos, saveTodosTodos, loading, error];
}




