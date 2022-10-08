import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react'
import { View, StyleSheet, Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import mainjson from '../Json/mainJson.json'
import Productlisting from './Productlisting';
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    // height: '40%',
    margin: 10,
    backgroundColor: 'red'
  },
  jsonProduct: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#E4EDFE',
    alignItems: 'center',
    fontSize: 20,
    marginTop: 10,
    justifyContent: 'space-between'
  },
  tagName: {
    fontSize: 15,
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold'
  },
  viewAll: {
    height: 40,
    width: 100,
    backgroundColor: '#83e8f7',
    fontSize: 15,
    color: 'white',
    marginRight: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
});

export class Product extends Component<any, any> {
  constructor(props) {
    super(props)

    this.state = {
      tagsJson: [],
    }
  }
  jsonTag() {
    this.setState({
      tagsJson: mainjson[0].products
    });
  }
  componentDidMount() {
    this.jsonTag()
  }
  callComponent(txt) {
    // this.props.navigation.navigate('Product', {
    //   name: txt
    // })
    console.log(txt);
    
    // Actions.Productlisting()
    // this.props.navigationcomponent();
  }
  render() {
    return (
      <>
        {this.state.tagsJson.map(d => (<><View style={styles.jsonProduct}>
          <Text style={styles.tagName}>{d.tagTitle}</Text>
          <TouchableOpacity onPress={() => this.callComponent(d.tagTitle)}>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ backgroundColor: '#e0e0eb' }}>
            {d.tagProducts.map(e => (
              <Image source={{ uri: e.productImage }} resizeMode='stretch' style={{
                height: 200,
                width: 200,
                margin: 10
              }} />
            ))}
          </ScrollView>
        </>))
        }
      </>
    )
  }
}

export default Product
