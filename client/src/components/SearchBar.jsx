import React, { useState } from 'react';
import './css/SearchBar.css';

export default function SearchBar({ onSearch }) {
  // Estados
  const [searchText, setSearchText] = useState('');
  
  // Eventos
  const handleChange = event => {
    setSearchText(event.target.value);
    event.preventDefault();
  };
  const handleSubmit = event => {
    onSearch(searchText);
    event.preventDefault();
  }
  
  return (
    <React.Fragment>
      <form onSubmit= {handleSubmit}>
        <div className= 'mdl-textfield mdl-js-textfield mdl-textfield--expandable'>
          <label className= 'mdl-button mdl-js-button mdl-button--icon' htmlFor = 'searchInput'>
            <i className= 'material-icons'>search</i>
          </label>
          <div className= 'mdl-textfield__expandable-holder'>
            <input 
              className= 'mdl-textfield__input' 
              type= 'text' 
              placeholder= 'Buscar...' 
              id= 'searchInput'
              value= {searchText}
              onChange= {handleChange}
            />
            <label className= 'mdl-textfield__label' htmlFor= 'searchInput' >Buscar productos</label>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}