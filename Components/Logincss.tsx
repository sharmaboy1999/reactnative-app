import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
      },
      image: {
        marginBottom: 40,
      }, 
      imageBrowser: {
        height: 200,
        width: 200,
      },
      inputView: {
        // backgroundColor:'cyan',
        // justifyContent: 'center',
        width: "80%",
        // marginBottom: 20,
        height: 70
      },
      textInput: {
        paddingLeft: 20,
        height: 45,
        backgroundColor: "#E4EDFE",
        borderRadius: 30,
        fontSize: 13
      },
      forgotButton: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center'
      },
      forgotText: {
        fontSize: 12,
        fontWeight: 'normal'
      },
    
      loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#66c2ff",
        marginBottom: 25
      },
});

export { styles }