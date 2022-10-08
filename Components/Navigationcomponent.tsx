import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Forgotpassword from './Forgotpassword'
import Home from './Home'
import Login from './Login'
import Productlisting from './Productlisting'

const Stack = createDrawerNavigator();
export class Navigationcomponent extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ swipeEnabled: false, headerShown: false, drawerItemStyle: { display: 'none' } }}
                    />
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false, swipeEnabled: false, }}
                    />
                    <Stack.Screen
                        name="Forgot Password"
                        component={Forgotpassword}
                        options={{ headerShown: false, swipeEnabled: false, drawerItemStyle: { display: 'none' } }}
                    />
                    <Stack.Screen
                        name="Product"
                        component={Productlisting}
                        options={{ headerShown: false, drawerItemStyle: { display: 'none' }, swipeEnabled: false, }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Navigationcomponent