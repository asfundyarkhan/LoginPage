import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        alignItems:'stretch',
        backgroundColor:'gainsboro',
      },
      emailInputContainer:{
          height:50,
          borderWidth:1,
          //width:'80%',
          padding:10,
          marginBottom:20,
          justifyContent:'center',
          alignItems:'center',
          borderRadius:25,
          backgroundColor: 'honeydew',
          textAlign:'center',
      },
      passwordInputContainer:{
          height:50,
          borderWidth:1,
          //width:'80%',
          padding:10,
          marginBottom:20,
          justifyContent:'center',
          alignItems:'center',
          borderRadius:25,
          backgroundColor: 'gray',
          textAlign:'center',
      },
      mainContainer: {
          flex:1,
          backgroundColor: 'cadetblue',
          justifyContent: 'center',
          padding:20,  
        },
        mainContainer1: {
          flex:1,
          backgroundColor: 'cadetblue',
          justifyContent: 'center',
          alignItems:'center',
        },
        ConfirmButton:{
          height:50,
          borderWidth:1,
          //width:'80%',
          padding:10,
          marginBottom:20,
          justifyContent:'center',
          alignItems:'center',
          borderRadius:25,
          backgroundColor: 'gray',
          textAlign:'center',
        },
        LoginButton:{
          justifyContent:'center',
          alignItems:'center',
          height:50,
          borderWidth:1,
          //width:'80%',
          padding:10,
          marginBottom:20,
          backgroundColor:'aqua',



        },
        signUpButton:{
          justifyContent:'center',
          alignItems:'center',
          height:50,
          borderWidth:1,
          //width:'80%',
          padding:10,
          marginBottom:20,
          backgroundColor:'aqua',

        },
        container2:{
          flex:1,
          padding:30,
          justifyContent: 'center',
          alignItems:'stretch',
          borderWidth:3,
          backgroundColor:'cadetblue',
        },
        Button1:{
          marginTop: 20,
        },
  })
  export default styles; 