import React from 'react';

export default function Filters({ onChange }) {
  const sendOrdering = event => {
    onChange(event.target.attributes[0].value);
  }
  
  const sendFilter = event => {
    onChange('onlyNew');
  }
  
  const clearFilters = event => {
    onChange('clear');
  }
  
  return (
    <React.Fragment>
      <div className= 'mdl-layout-spacer' />
      <button id= 'clearBtn' onClick= { clearFilters }className= 'mdl-button mdl-js-button mdl-js-ripple-effect'>
        <i className= 'material-icons'>clear</i><span> Limpiar Filtros</span>
      </button>
      <button id= 'sortBtn' className= 'mdl-button mdl-js-button mdl-js-ripple-effect'>
        <i className= 'material-icons'>sort</i><span> Ordenar por Precio</span>
      </button>
      <button value= 'onlyNew' onClick= { sendFilter } className= 'mdl-button mdl-js-button mdl-js-ripple-effect'>
        <i className= 'material-icons'>filter_alt</i><span> Filtrar solo Nuevos</span>
      </button>
      <ul 
        className= 'mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect'
        htmlFor= 'sortBtn'
      >
        <li value='ascending' onClick= { sendOrdering } className='mdl-menu__item'>Ascendente</li>
        <li value='descending' onClick= { sendOrdering } className='mdl-menu__item'>Descendente</li>
      </ul>
    </React.Fragment>
  );
}