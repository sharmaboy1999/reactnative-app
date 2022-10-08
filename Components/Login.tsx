import React, { Component } from 'react'
import { StyleSheet, StatusBar, Text, TextInput, Image, TouchableOpacity, View, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { styles } from './Logincss';

var passwordCheck;
var emailCheck;
export class Login extends Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      email: '',
      password: '',
      blankPassword: true,
      blankEmail: true,
      errorEmail: true
    }
  }
  checkData = () => {
    const re = /\S+@\S+\.\S+/
    // if (!re.test(this.state.email) || this.state.password == '') {
    //   alert('Please enter your details !');
    //   this.setState({ errorEmail: false })
    // } else {
    //   this.props.navigation.navigate('Home')
    // }

    if (this.state.password == '') {
      this.setState({ blankPassword: false })
    }

    if (this.state.password == '') {
      this.setState({ blankPassword: false })
      passwordCheck = false
    } else {
      passwordCheck = true
    }

    if (this.state.email == '') {
      this.setState({ blankEmail: false })
    } else {
      if (!re.test(this.state.email)) {
        this.setState({ errorEmail: false })
        emailCheck = false
      } else {
        emailCheck = true
      }
    }

    if (passwordCheck == true && emailCheck == true) {
      Actions.Home()
      // this.props.navigation.navigate('Home')
    }
  }
  forgotPassword = () => {
    Actions.Forgotpassword()
    // this.props.navigation.navigate('Forgot Password')
  }
  render() {
    return (
      <>
        <View style={styles.container}>
          <Image style={styles.image} source={require('../assets/download.png')} />
          {/* <ImageBackground source={require('../assets/download.png')} resizeMode="contain" style={styles.imageBrowser}>
          </ImageBackground> */}

          <View style={styles.inputView}>
            <TextInput style={styles.textInput}
              placeholder="Email/Username"
              placeholderTextColor="#003f5c"
              keyboardType="email-address"
              onChangeText={(value) => this.setState({ email: value, errorEmail: true, blankEmail: true })}
            />
            {this.state.errorEmail == false ? (
              <Text style={{ color: 'red', fontSize: 12 }}>
                * Please enter valid email/username.
              </Text>
            ) : null}
            {this.state.blankEmail == false ? (
              <Text style={{ color: 'red', fontSize: 12 }}>
                * Please fill the email/username.
              </Text>
            ) : null}
          </View>
          <View style={styles.inputView}>
            <TextInput style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              maxLength={8}
              onChangeText={(value) => this.setState({ password: value, blankPassword: true })}
            />
            {this.state.blankPassword == false ? (
              <Text style={{ color: 'red', fontSize: 12 }}>
                * Please fill the password.
              </Text>
            ) : null}
          </View>

          <TouchableOpacity style={styles.loginBtn} onPress={this.checkData}>
            <Text>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotButton} onPress={this.forgotPassword}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}

export default Login 