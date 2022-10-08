import React, { Component } from 'react'
import { TextInput, Text, StyleSheet, View } from 'react-native'
import { Form, FormItem, Picker } from 'react-native-form-component';
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        width: 300,
        backgroundColor: '#E4EDFE',
        borderRadius: 10
    }
});

export class Myform extends Component<any, any> {
    constructor(props) {
        super(props)

        this.state = {
            fname: '',
            lname: '',
            errorfname: true,
            errorlname: true
        }
    }
    fname(value) {
        this.setState({ fname: value })
        const re = /^[a-zA-Z\s]+$/
        if (!re.test(this.state.fname)) {
            this.setState({
                errorfname: false
            })
        } else {
            this.setState({
                errorfname: true
            })
        }
    }
    lname(value) {
        this.setState({ lname: value })
        const re = /^[a-zA-Z\s]*$/;
        if (!re.test(this.state.lname)) {
            this.setState({
                errorlname: false
            })
        } else {
            this.setState({
                errorlname: true
            })
        }
    }
    render() {
        return (
            <>
                <TextInput style={styles.input}
                    value={this.state.fname}
                    onChangeText={(value) => this.fname(value)}
                    placeholder="Firstname" />
                {this.state.errorfname == false ? (
                    <Text style={{ color: 'red' }}>
                        * Please enter valid details.
                    </Text>
                ) : null}
                <TextInput style={styles.input}
                    onChangeText={(value) => this.lname(value)}
                    placeholder="Lastname" />
                {this.state.errorlname == false ? (
                    <Text style={{ color: 'red' }}>
                        * Please enter valid details.
                    </Text>
                ) : null}
                <TextInput style={styles.input}
                    returnKeyType="next"
                    autoCapitalize="none"
                    onChangeText={(value) => this.setState({ email: value })}
                    value={this.state.email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    placeholder="Email" />
                <TextInput style={styles.input}
                    onChangeText={(value) => this.setState({ name: value })}
                    placeholder="Address" />
                <TextInput style={styles.input}
                    onChangeText={(value) => this.setState({ name: value })}
                    placeholder="District" />
                <TextInput style={styles.input}
                    onChangeText={(value) => this.setState({ name: value })}
                    placeholder="state" />
                <TextInput style={styles.input}
                    onChangeText={(value) => this.setState({ name: value })}
                    placeholder="country" />
                <TextInput style={styles.input}
                    onChangeText={(value) => this.setState({ name: value })}
                    placeholder="Bloodgroup" />
                <TextInput style={styles.input}
                    maxLength={2}
                    keyboardType='numeric'
                    returnKeyType="next"
                    autoCapitalize="none"
                    onChangeText={(value) => this.setState({ age: value })}
                    placeholder="Age" />
                <TextInput style={styles.input}
                    maxLength={10}
                    keyboardType='numeric'
                    returnKeyType="next"
                    autoCapitalize="none"
                    onChangeText={(value) => this.setState({ number: value })}
                    placeholder="Mobile number" />
                <Text>submit</Text>
            </>
        )
    }
}

export default Myform