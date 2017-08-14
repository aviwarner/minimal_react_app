import React from 'react'
import firebase from '../modules/firebase'
import { currentUser } from '../modules/zendesk'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { messages: [] }
    this.rootRef = firebase.database().ref().child('chat/messages')
    this.readRef = this.rootRef.limitToLast(5)
    currentUser().then( ({currentUser}) => this.currentUser = currentUser )
  }
  componentDidMount() {
    this.readRef.on('value', snapshot => {  
      this.setState({ messages: snapshot.val() })
    })
  }
  render() {
    const { product, account, ticketId } = this.props.context
    let newMessage = ''
    return (
      <div>
        <ul>
          { this.state.messages && Object.keys(this.state.messages).map( (key) => (
            <li key={key}>{this.state.messages[key].name}: {this.state.messages[key].message}</li>
          ))} 
        </ul>
        <form onSubmit={(e) => this.handleSubmit(e)} >
          <input type='text' name='new_message' onChange={ (e) => this.handleInputChanged(e)}/>
          <button type='submit'>send</button>
        </form>
      </div>
    )
  }
  handleSubmit(event) {
    event.preventDefault()
    event.target.reset()
    this.rootRef.push({name: this.currentUser.name, message: this.newMessage })
    this.newMessage = ''
  }
  handleInputChanged(event) {
    this.newMessage = event.target.value
  }
}

export default App