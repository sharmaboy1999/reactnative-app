import React, { Component } from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'
import Forgotpassword from './Forgotpassword'
import Home from './Home'
import Login from './Login'

export class Routes extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="Login" component={Login} title="Login" initial={true} />
                    <Scene key="Home" component={Home} title="Home" />
                    <Scene key="Forgotpassword" component={Forgotpassword} title="Forgotpassword" />
                </Scene>
            </Router>
        )
    }
}

export default Routes