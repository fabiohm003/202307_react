import React from 'react';
import ReactDOM from 'react-dom';

export function Modal ({children}){

    return ReactDOM.createPortal (
        <div className='Modal'>
          {children}
        </div>,
        document.querySelector('.aqui-modal')
      );
}
  
