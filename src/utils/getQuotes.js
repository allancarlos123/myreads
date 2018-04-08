const api = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1";

const headers = {
  'X-Mashape-Key': "ZKCQ8eXlgHmshe6VVJQTcpuC4TPvp12LYt3jsnpH19wPxZreqz",
  'Accept': "application/json"
};

export const get = () =>
  fetch(api, { headers })
    .then(res => res.json())
    .then(result => {return result})
    .catch(err => console.log('error', err))