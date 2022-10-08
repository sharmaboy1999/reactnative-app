import React, { Component } from 'react'
import PushNotification from 'react-native-push-notification';
import { Platform, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
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
});

export class Pushnotification extends Component {
    localNotification = () => {
        if (Platform.OS === 'web') {
            alert('This will not work on web')
        } else {
            alert('Mobile notification!');
            PushNotification.localNotification({
                channelId: 1,
                autoCancel: true,
                bigText:
                    'This is local notification demo in Openworkpark app. Only shown, when expanded.',
                subText: 'Openworkpark Notification Demo',
                title: 'Openworkpark',
                message: 'Expand me to see more',
                vibrate: true,
                vibration: 300,
                playSound: true,
                soundName: 'default',
                actions: '["Yes", "No"]'
            })
        }
    }
    componentDidMount() {
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function (token) {
              console.log('TOKEN:', token)
            },
      
            // (required) Called when a remote or local notification is opened or received
            onNotification: function (notification) {
              console.log('REMOTE NOTIFICATION ==>', notification)
      
              // process the notification here
            },
            // Android only: GCM or FCM Sender ID
            senderID: '453164785256',
            popInitialNotification: true,
            requestPermissions: true
          })
    }
    render() {
        return (
            <>
                <Text style={styles.addBtn} onPress={this.localNotification}>Send notification </Text>
            </>
        )
    }
}

export default Pushnotification