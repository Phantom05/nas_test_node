var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET users listing. */
router.get('/', async function (req, res, next) {

  const apiAddress = `https://jsonplaceholder.typicode.com/todos`;


  const {data} = await axios({
    method: "get",
    url   : apiAddress
  });
  console.log(data)
  res.json({list:data})
});

module.exports = router;
