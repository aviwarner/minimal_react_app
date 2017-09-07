import React from 'react'
import { render } from 'react-dom'
import { ticketId } from './modules/zendesk'
import App from './components/App'

let client = ZAFClient.init()
const root = document.querySelector('#root')
client.on('app.registered', function({context}) {
  render(<App context={context}/>, root)
})
