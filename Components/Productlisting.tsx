import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import json from '../Json/mainJson.json'

var dataname;
var array = [];
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    height: '100%'
  },
  secondcontainer: {
    height: '8%',
    width: '100%',
    backgroundColor: '#E4EDFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thirdcontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  productDescriptionContainer: {
    justifyContent: 'center'
  },
  tagName: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold'
  },
});

export class Productlisting extends Component<any, any> {
  constructor(props) {
    super(props)

    this.state = {
      data: 'demoname'
    }
  }
  componentDidMount() {
    this.setState({ data: this.props.route.params.name })
  }
  // componentDidUpdate() {
  //   if (this.state.data == "Categories") {
  //     alert('gaya')
  //     dataname = 'this is category'
  //   }
  //   switch (this.state.data) {
  //     case 'Categories':
  //       dataname = 'this is category'
  //       break;
  //     case 'Most Selling':
  //       dataname = 'this is Most Selling'
  //       break;
  //     case 'Trends':
  //       dataname = 'this is Trends'
  //       break;

  //   }
  // }
  render() {
    switch (this.state.data) {
      case 'New Arrival':
        dataname = 'this is New Arrival',
          array = json[0].products[0].tagProducts
        break;
      case 'Most Selling':
        dataname = 'this is Most Selling',
          array = json[0].products[1].tagProducts
        break;
      case 'Categories':
        dataname = 'this is Categories',
          array = json[0].products[2].tagProducts
        break;
      case 'Trends':
        dataname = 'this is Trends',
          array = json[0].products[3].tagProducts
        break;
      case 'Deals of the day':
        dataname = 'this is Deals of the day',
          array = json[0].products[4].tagProducts
        break;
      case 'Recommended':
        dataname = 'this is Trends',
          array = json[0].products[5].tagProducts
        break;

    }
    console.log(this.state.data);
    console.log(dataname);
    console.log(array);

    return (<>
      <View style={styles.maincontainer}>
        <View style={styles.secondcontainer}>
          <Text style={styles.tagName}>{this.props.route.params.name} Items</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.thirdcontainer}>
            {array.map(d => (<>
              <View style={{
                width: '50%',
                padding: 5,
              }}>
                <Image source={{ uri: d.productImage }} resizeMode='stretch' style={{
                  height: 200,
                  width: '100%',
                }} />
                <View style={styles.productDescriptionContainer}>
                  <Text>{d.productDescription}</Text>
                </View>
              </View>
            </>))}
          </View>
        </ScrollView>
      </View>
    </>
    )
  }
}

export default Productlisting