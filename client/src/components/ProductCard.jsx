import React from 'react';
import './css/ProductCard.css';

export default function ProductCard({ id, name, condition, price, currency, imageUrl, quantity}) {
  return (
    <React.Fragment>
      <div className='mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone'>
        <div id= 'card' className= 'mdl-card mdl-shadow--4dp'>
          <ul className= 'mdl-menu mdl-menu--bottom-right mdl-js-menu' htmlFor= {id} >
            <li className="mdl-menu__item">{ condition === 'new' ? 'Producto Nuevo' : 'Articulo Usado' }</li>
            <li className="mdl-menu__item">
              { 
                quantity ? (quantity + (quantity === 1 ? ' Unidad disponible' : ' Unidades disponibles')) : 'No hay unidades disponibles'
              }
            </li>
          </ul>
          <div id= 'cardTitle' className= 'mdl-card__title mdl-card--border'>
            <h1 id='productTitle' className= 'mdl-card__subtitle-text'>{ name }</h1>
          </div>
          <div id= 'imageContainer' className= 'mdl-card__media mdl-card--border'>
            <img id= 'productImage' src= { imageUrl } alt= { name } />
          </div>
          <button className= 'mdl-button mdl-js-button'>
            { (currency === 'ARS' ? ('$' + price) : ('U$D ' + price)) + ' - ' + (condition === 'new' ? 'Nuevo' : 'Usado') }
          </button>
          <button className= 'mdl-button mdl-js-button mdl-button--accent'>
            { quantity ? (quantity + (quantity === 1 ? ' Unidad disponible' : ' Unidades disponibles')) : 'No hay unidades disponibles' }
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}