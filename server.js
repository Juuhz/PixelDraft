#!/usr/bin/env nodejs
const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev,
  dir: './src'
});
const handle = app.getRequestHandler();
const fs = require('fs');

app.prepare().then(() => {
  const server = express();

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3002, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3002');
  });

});