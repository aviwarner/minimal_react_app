import React from 'react'

class App extends React.Component {
  render() {
    const { product, account, ticketId } = this.props.context
    return (
      <ul>
        <li>{product}</li>
        <li>{account.subdomain}</li>
        <li>{ticketId}</li>
      </ul>
    )
  }
}

export default App
