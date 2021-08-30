import React, { useState, useEffect } from "react";
import { TextInput, View, Button, Text } from "react-native";
import firebase from "firebase";
import firestore from  "firebase/firestore";
import styles from "../Styles/Styles";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { login , signup } from "../../actions/users";

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (email, password) => {
      dispatch (login(email, password));
    },
    userSignup: (email , password) => {
        dispatch (signup(email, password));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const LoginScreen = ({ navigation, userLogin , userSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  // const [user , setUser] = useState([]);
  //signIn or signUp
  const [create, setCreate] = useState(false);
  const ref = firebase.firestore().collection("Users");

  const signIn = (email, password) => {
        userLogin(email, password)
  };
  const signUp = (email, password, firstName, lastName) => {
    try {
        userSignup(email , password)
      ref
        .add({
          firstName: firstName,
          lastName: lastName,
        })
        .then(() => {
          console.log("user Updated");
        });
      navigation.navigate("HomeScreen");
    } catch (e) {
      console.log(e);
      alert(e);
    }
  };
  const checkIfLoggedIn = async () => {
    try {
      await firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          navigation.navigate("HomeScreen");
        } else {
          alert("you need to SignUP");
          navigation.navigate("LogIn");
        }
      });
    } catch (e) {
      alert(e);
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={styles.emailInputContainer}
        keyboardType="email-address"
        autoCorrect={false}
        autoCompleteType="email"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        style={styles.passwordInputContainer}
        secureTextEntry={true}
      />
      {create ? (
        <>
          <TextInput
            placeholder="First Name"
            onChangeText={setFirstName}
            value={firstName}
            style={styles.emailInputContainer}
          />
          <TextInput
            placeholder="Last Name"
            onChangeText={setLastName}
            value={lastName}
            style={styles.emailInputContainer}
          />
          <Button
            title="Sign Up "
            onPress={() => {
              signUp(email, password, firstName, lastName);
            }}
          />
          <Text style={styles.Button1} onPress={() => setCreate(false)}>
            Sign IN{" "}
          </Text>
        </>
      ) : (
        <>
          <Button
            title="Sign In "
            onPress={() => {
              signIn(email, password);
              checkIfLoggedIn();
            }}
          />
          <Text style={styles.Button1} onPress={() => setCreate(true)}>
            Create An Account{" "}
          </Text>
        </>
      )}
    </View>
  );
};

// export default LoginScreen;
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
