import React from 'react'
import express from 'express'
import { renderToPipeableStream } from 'react-dom/server'
import App from './App'

const app = express()

app.use('/*', (req, res) => {

  const { pipe, abort } = renderToPipeableStream(<App />, {
    bootstrapScripts: ['/main.js'],
    onShellReady() {
      res.statusCode = 200
      res.setHeader('content-type', 'text/html')
      pipe(res)
    },
    onShellError() {
      res.statusCode = 500
      res.setHeader('content-type', 'text/html')
      res.send('<h1>An Error Occurred!</h1>')
    },
    onError(e) {
      console.error(e)
    }
  })

  setTimeout(() => abort(), 5000)
});