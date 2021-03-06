import React from 'react';

export default function Layout({ searchbar, filters, children }) {
  
  return (
    <React.Fragment>
      <div className= 'mdl-layout mdl-layout--no-drawer-button mdl-layout--fixed-header mdl-js-layout'>
        <header className= 'mdl-layout__header mdl-layout__header--scroll'>
          <div className= 'mdl-layout__header-row'>
            <span id= 'title' className= 'mdl-layout__title'>Buscador</span>
            <div className= 'mdl-layout-spacer'></div>
              {searchbar}
          </div>
          <div className= 'mdl-layout__header-row'>
            {filters}
          </div>
        </header>
      </div>
      <main style= { { width: '100%' } } className= 'mdl-layout__content'>
        {children}
      </main>
    </React.Fragment>
  );
}