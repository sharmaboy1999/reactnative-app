import React, { Component } from 'react'
import Routes from './Components/Routes'
import { AppRegistry } from 'react-native'

export class App extends Component {
  render() {
    return (
      <Routes/>
    )
  }
}

export default App
AppRegistry.registerComponent('App', () => App)