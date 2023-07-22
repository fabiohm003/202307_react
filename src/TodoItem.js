import './TodoItem.css';

import {CompleteIcon} from './CompleteIcon.js';
import {DelteteIcon} from './DeleteIcon.js';



//aplicar iconos desde libreria react
export function TodoItem (Props){

    let clssVerde, tachado = "";

    if (Props.completed == true){
      clssVerde = "ico-verde";
      tachado = "tachado";
    }

 
    return (
      <>
      <li className="caja">

        <CompleteIcon 
          className={`ico-done ${tachado} ${clssVerde}`}
          funcion={() => Props.modifLista(Props.texto, Props.completed)}
        />

        <p className={`${tachado}`}>
          {Props.texto}
        </p>

        <DelteteIcon 
            className={'ico-close'}
            funcion={() => Props.elimLista(Props.texto)}
        />
      </li>
      </>
  );
}
  





/*
//aplicar iconos desde css
export function TodoItem (Props){

  let clssVerde, tachado = "";

  if (Props.completed == true){
    clssVerde = "ico-verde";
    tachado = "tachado";
  }

    return (
      <>
      <li className="caja">

        <span
          className={`ico-done ${tachado} ${clssVerde}`}
          onClick={() => Props.modifLista(Props.texto, Props.completed)}
        ></span>

        <p className={`${tachado}`}>
          {Props.texto}
        </p>

        <span 
            className={'ico-close'}
            onClick={() => Props.elimLista(Props.texto)}
          ></span>

      </li>
      </>
  );
}
*/
