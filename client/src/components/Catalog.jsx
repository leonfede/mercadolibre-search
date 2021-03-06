import React, { useState } from 'react';
import './css/Catalog.css';
import ProductCard from './ProductCard.jsx';

export default function Catalog({ firstRun, productsArray, filters }) {
  const [index, setIndex] = useState(0);
  
  const nextPage = event => {
    setIndex(index + 1);
    window.scrollTo(0, 0);
    event.preventDefault();
  }
  
  const productPages = [];
  
  if(filters) {
    filters.forEach(filter => {
      switch(filter) {
        case 'ascending':
          productsArray = productsArray.sort( (a, b) => a.price - b.price )
          break;
        case 'descending':
          productsArray = productsArray.sort( (a, b) => b.price - a.price )
          break;
        case 'onlyNew':
          productsArray = productsArray.filter(product => product.condition === 'new')
          break;
        default:
          break;
      }
    });
  }
  
  const products = productsArray ? (productsArray.map(product => 
    {
      return (<ProductCard
        key= {product.id}
        id= {product.id} 
        name= {product.title} 
        condition= {product.condition}
        price= {product.price}
        currency= {product.currency_id}
        imageUrl= {product.thumbnail}
        quantity= {product.available_quantity}
      />);
  })) : null;
  
  if(products.length) {
    for(let i = 0; i <= products.length; i = i + 19) {
      productPages.push(products.slice(i, i + 19));
    }
  }

  if(firstRun){
    return (
      <React.Fragment>
        <div className= 'mdl-grid'>
          <div id= 'infoText' className= 'mdl-cell mdl-cell--12-col'>
            <h5>Ingrese un termino de busqueda</h5>
          </div>
          <div id= 'infoText' className= 'mdl-cell mdl-cell--12-col'>
            <h5>Los resultados apareceran aqui</h5>
          </div>
        </div>
      </React.Fragment>
    );
  } else if(products.length){
    return (
    <React.Fragment>
      <div className= 'mdl-grid'>
        { productPages[index] }
        <div 
          id= 'viewMoreBtn'
          style= { { display: (index < (productPages.length - 1) ? 'flex' : 'none') } }
          className= 'mdl-cell--1-col mdl-cell--middle'
        >
          <button  
            id='moreButton' 
            className= 'mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored' 
            onClick= { nextPage }
          >
           <i className= 'material-icons'>add</i>
          </button>
          <span><b>Mas resultados</b></span>
        </div>
      </div>
    </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className= 'mdl-grid'>
          <div id= 'infoText' className= 'mdl-cell mdl-cell--12-col'>
            <h5>No se encontraron resultados.</h5>
          </div>
        </div>
      </React.Fragment>
    )
  }
}