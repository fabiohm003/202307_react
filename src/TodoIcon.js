import { ReactComponent as Donesvg } from "./ico/done.svg"; //no usado, pero asi es como se llama un svg
import { ReactComponent as Closesvg } from "./ico/close.svg"; //no usado, pero asi es como se llama un svg

import './TodoItem.css';


export function TodoIcon ({Props}){

    return (
        <>
        <span
          className={`${Props.className}`}
          onClick={Props.funcion}
        >
        </span>
        </>
    );
}
