var requirejs = require('requirejs');

require("dotenv").config();
requirejs.config({ nodeRequire: require });

exports.handler = async function ({ body }) {
  const { chart, country, number } = JSON.parse(body);
  const API_URL = 'https://api.musixmatch.com/ws/1.1/';

  const params = new URLSearchParams({
    country,
    page: '1',
    format: 'json',
    apikey: process.env.API_KEY ?? '',
    page_size: number?.toString() ?? 10,
  });

  const url = `${API_URL}chart.${chart}.get?${params}`;

  const data = await (await fetch(url)).json();

  return { body: JSON.stringify(data), statusCode: 200, params: JSON.parse(body) };
}
