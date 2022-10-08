import React, { Component } from 'react'
import { StyleSheet, View, Modal, TextInput, Text, Alert, Platform, ImageBackground, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconBadge } from 'react-native-icon-badge';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import Firebase from '@react-native-firebase/app';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Carouselcomponent from './Carouselcomponent';
import Topmenu from './Topmenu';
import Pushnotification from './Pushnotification';
import Modalcomponent from './Modalcomponent';
import Product from './Product';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    height: '100%'
  },

  addBtn: {
    height: 40,
    borderWidth: 2,
    width: 150,
    padding: 8,
    backgroundColor: '#66c2ff',
    borderRadius: 10,
    color: 'white',
    textAlign: 'center',
  },
  tableRow: {
    justifyContent: "center",
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    width: 300,
    backgroundColor: '#E4EDFE',
    borderRadius: 10
  },
  table: {
    textAlign: 'center',
    width: '30%',
    padding: 10,
    borderWidth: 1,
  },
  carousel: {
    // backgroundColor: 'red',
    marginBottom: 10,
    // paddingBottom: 1,
    // height: '70%'
  },

});
export class Home extends Component<any, any> {
  constructor(props) {
    super(props)

    this.state = {
      modalVisible: false,

    }
  }
  // navigationScreen = () => {
  //   this.props.navigation.navigate('Product')
  // }
  // showNotification = () => {
  //   this.props.navigation.navigate('Notification', {
  //     name: name,
  //     age: age,
  //     mobile: mobileNumber
  //   })
  // }

  render() {
    return (
      <>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Topmenu  />
          {/* <Topmenu componentprops={this.props.navigation} /> */}
          <Carouselcomponent />
          <Product  />
          {/* <Product navigation={this.props.navigation} /> */}
        </ScrollView>
      </>
    )
  }
}

export default Home