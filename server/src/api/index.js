require('dotenv').config();
const { Router } = require('express');
const axios = require('axios');
const router = Router();

router.post('/auth', (req, res) => {
  const response = req.body;
  const { email, client_secret } = response;
  axios({
    method: 'post',
    url: `${process.env.API_URL}authentication`,
    headers: {
      'content-type': 'application/json',
    },
    data: {
      email,
      client_secret,
    },
  })
    .then(function (result) {
      res.status(result.status).send(result.data);
    })
    .catch(function (result) {
      // since pegaki's api is handlig errors and response, there is no need to handle it here..
      res.status(result.response.status).send(result.response.data);
    });
});
router.post('/places', (req, res) => {
  const response = req.body;
  const { cep, access_token } = response;
  axios({
    method: 'get',
    url: `${process.env.API_URL}pontos/${cep}`,
    headers: {
      'content-type': 'application/json',
      Authorization: access_token,
    },
  })
    .then(function (result) {
      res.status(result.status).send(result.data);
    })
    .catch(function (result) {
      // since pegaki's api is handlig errors and response, there is no need to handle it here..
      res.status(result.response.status).send(result.response.data);
    });
});

module.exports = router;
