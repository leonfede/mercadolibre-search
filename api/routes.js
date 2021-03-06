const router = require('express').Router();
const axios = require('axios');

const searchCache = {};

router.get('/search', (req, res, next) => {
  const { query } = req.query;
  console.log(`Buscando '${query}'`);
  if(searchCache.hasOwnProperty(query)) {
    console.log('Buscando en cache');
    res.status(200).send(searchCache[query]);
  } else {
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    .then(({ data }) => {
      console.log('Fetching MercadoLibre');
      const results = data.results.map(result => ({
        id: result.id,
        title: result.title,
        price: result.price,
        currency_id: result.currency_id,
        available_quantity: result.available_quantity,
        thumbnail: result.thumbnail,
        condition: result.condition
      }));
      searchCache[query] = results;
      res.status(200).send(results);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
  }
});

module.exports = router;