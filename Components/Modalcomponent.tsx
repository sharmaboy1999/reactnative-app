import React, { Component } from 'react'
import { StyleSheet, View, Modal, TextInput, Text } from 'react-native'

var table = [];
var tableData;
var name;
var age;
var mobileNumber;
const styles = StyleSheet.create({
    containerTwo: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
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
    submitBtn: {
        height: 40,
        borderWidth: 2,
        width: 150,
        padding: 8,
        backgroundColor: '#66c2ff',
        borderRadius: 10,
        color: 'white',
        textAlign: 'center'
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
    }
});
export class Modalcomponent extends Component<any, any> {
    constructor(props) {
        super(props)

        this.state = {
            modalVisible: false,
            name: 'default',
            age: 'default',
            number: ''
        }
    }
    showPopup = () => {
        this.setState({ modalVisible: true });
    }
    dataCheck = () => {
        if (this.state.name == '' || this.state.age == '' || this.state.number == '') {
            alert('Please fill all details !');
        } else {
            // table.push(
            //   <View style={styles.tableRow}>
            //     <Text style={styles.table}>Name</Text>
            //     <Text style={styles.table}>Age</Text>
            //     <Text style={styles.table}>Mobile number</Text>
            //     <Text style={styles.table}>{this.state.name}</Text>
            //     <Text style={styles.table}>{this.state.age}</Text>
            //     <Text style={styles.table}>{this.state.number}</Text>
            //   </View>)
            // for (var i = 0; i < table.length; i++) {
            //   tableData = table[i];
            // }
            name = this.state.name;
            age = this.state.age;
            mobileNumber = this.state.number;
            this.setState({ modalVisible: false });
            this.setState({ name: '' });
            this.setState({ age: '' });
            this.setState({ number: '' });
        }
    }
    render() {
        return (
            <>
                <Text style={styles.addBtn} onPress={this.showPopup}>Add my details </Text>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}>
                    <View style={styles.containerTwo}>
                        <TextInput style={styles.input}
                            returnKeyType="next"
                            autoCapitalize="none"
                            onChangeText={(value) => this.setState({ name: value })}
                            placeholder="Name" />
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
                        <Text style={styles.submitBtn} onPress={this.dataCheck}>submit</Text>
                    </View>
                </Modal>
            </>
        )
    }
}

export default Modalcomponent