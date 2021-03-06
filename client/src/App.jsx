import React, { useState } from 'react';
import axios from 'axios';
import './roboto.css';
import Layout from './components/Layout.jsx';
import SearchBar from './components/SearchBar.jsx';
import Catalog from './components/Catalog.jsx';
import Filters from './components/Filters.jsx';

function App() {
  const [products, setProducts] = useState([]);
  const [firstRun, setFirstRun] = useState(true);
  const [filters, setFilters] = useState([]);
  
  const search = query => {
    if(firstRun) setFirstRun(false);
    axios.get(`https://api-leonfede.run-us-west2.goorm.io/api/search?query=${query}`)
      .then(({ data }) => {
        setProducts(data);
      })
      .catch(err => console.error(err));
  }
  
  const changeFilters = filter => {
    const oldFilters = filters;
    if(filter === 'onlyNew') {
      setFilters([...oldFilters, 'onlyNew']);
    } else if(filter === 'clear') {
      console.log(filters)
      setFilters([]);
    } else {
      if(oldFilters.includes('onlyNew')) {
          setFilters(['onlyNew', filter]);
        } else {
          setFilters([filter]);
        }
    }
  }
  
  return (
    <React.Fragment>
      <Layout 
        searchbar= { <SearchBar onSearch= {search}/> }
        filters = { <Filters onChange={changeFilters} /> }
      >
        <Catalog firstRun= {firstRun} filters= {filters} productsArray= {products} />
      </Layout>
    </React.Fragment>
  );
}

export default App;
