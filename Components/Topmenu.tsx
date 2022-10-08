import React, { Component } from 'react'
import { View, StyleSheet, Text,Image, TouchableHighlight } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        height: '100%'
    },
    topmenuContainer: {
        backgroundColor: '#E4EDFE',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '2%',
        width: '100%'
    },
    companyName: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    }
});

export class Topmenu extends Component<any, any> {
    opendrawer = () =>{
        // this.props.componentprops.openDrawer()
        console.log('ok');
    }
    render() {
        return (
            <View style={styles.topmenuContainer}>
                <TouchableHighlight onPress={this.opendrawer}>
                <Image  source={require('../assets/menu.png')} resizeMode='stretch' style={{
                  height: 30,
                  width: 30,
                  marginLeft:10
                }} />
                </TouchableHighlight>
                {/* <Text onPress={this.opendrawer}>Sidedrawer</Text> */}
                <Text style={styles.companyName}>OWP</Text>
                <Text>Search</Text>
            </View>
        )
    }
}

export default Topmenu