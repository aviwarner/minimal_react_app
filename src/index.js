import React from 'react'
import { render } from 'react-dom'
import currentUser from './modules/zendesk'

const root = document.querySelector('#root')
currentUser().then( (user) => {
  console.log(user)
  const App = () => <div>{{ user }}</div>
  render(<App />, root)
})
