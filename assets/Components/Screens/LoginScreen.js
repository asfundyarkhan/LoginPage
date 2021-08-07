import React,{useState} from 'react';
import { TextInput, View, Button , Text } from 'react-native';
import styles from '../Styles/Styles';
import { sign_In,sign_Up} from '../Utils/FireStore';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    //signIn or signUp 
    const  [create , setCreate ] = useState(false);
    const signIn = (email , password) =>{
        try {
            firebase.auth().signInWithEmailAndPassword(email , password).then(function(user){
                console.log(user)
            })
        }
        catch(e){
            console.log(e)
            alert ("opps something went wrong");
        }

};     
    const signUp = (email ,password) => {
        try {
            firebase.auth().createUserWithEmailAndPassword(email,password)

        }
        catch(e){
            console.log(e)
            alert ("opps something went wrong");
        }
};
    const checkIfLoggedIn = () =>{
        try{
        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                navigation.navigate("HomeScreen")
            }
            else{
                alert("you need TO signUP")
                navigation.navigate("LoadingScreen")
            }
        })
    }catch(e){
        console.log(e)
        alert("fuck!")
    }
     };         
    return (
        <View styles={styles.container}>
            <TextInput placeholder="Email" onChangeText={setEmail} value={email} style={styles.emailInputContainer}/>
            <TextInput placeholder="Password" onChangeText={setPassword} value={password} style={styles.passwordInputContainer} secureTextEntry={true}/>
            {create ?( <>
                    <Button title ="Sign Up " onPress ={ ()=> signUp({email,password})
                    }/>
                   <Text style={styles.Button1} onPress ={ ()=> setCreate(false)}>Sign IN </Text>
                </> ):( <>
                   <Button title ="Sign In " 
                   onPress ={ ()=> {
                       signIn(email,password)
                       checkIfLoggedIn()}}/>
                   <Text style={styles.Button1} onPress ={ ()=> setCreate(true)}>Create An Account  </Text>
                   </>
                )} 
        </View>
    );
};

export default LoginScreen;