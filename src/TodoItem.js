import './TodoItem.css';


export function TodoItem (Props){
    return (
      <>
      <li className="caja">
        <span className='ico-done'></span>
        <p>
          {Props.texto}
        {/*
          {String(Props.completed)}
         */}
        </p>
        <span className='ico-close'></span>
      </li>
      </>
  );
}
  