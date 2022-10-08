import React, { Component } from 'react'
import { TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        // justifyContent: "center",
    },
    inputView: {
        backgroundColor: "#E4EDFE",
        borderRadius: 30,
        width: "80%",
        height: 45,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10
    },
    textInput: {
        fontSize: 13,
        textAlign:'center'
    }, 
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#66c2ff",
    }
})

export class Forgotpassword extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <TextInput style={styles.textInput}
                        placeholder="Enter your email"
                        placeholderTextColor="#003f5c"
                        keyboardType="email-address"
                        onChangeText={(value) => this.setState({ email: value })}
                    />
                </View>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Forgotpassword