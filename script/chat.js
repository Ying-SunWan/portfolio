import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.cohere.ai/v1/classify',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  data: {truncate: 'END'}
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });