import axios from 'axios';
import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	text: {
		padding: 20,
		backgroundColor: '#E4EDFE',
		width: '100%',
		borderBottomWidth: 1
	}
});

export class Notification extends Component<any, any> {
	constructor(props) {
		super(props)

		this.state = {
			data: []
		}
	}
	componentDidMount = async () => {
		const response =
			await axios.get('http://localhost:8004/data');
			console.log(response.data);
			
		this.setState({
			data:response.data
		})
		
	}
	render() {
		return (
			<>
				<Text style={styles.text}>my data is {this.props.route.params.name}. my age is {this.props.route.params.age}. my mobile number is {this.props.route.params.mobile}.</Text>

				<Text style={styles.text}> {this.state.data.map(d => <Text style={styles.text}>{d.notification}</Text>)}</Text>
				{/* {data.map(d => (<Text style={styles.text}>my name is {d.notification}</Text>))} */}
			</>


		)
	}
}

export default Notification