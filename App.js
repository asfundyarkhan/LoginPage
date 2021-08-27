import React from "react";
import { Text, View } from "react-native";
import HomeScreen from "./assets/Components/Screens/HomeScreen";
import LoginScreen from "./assets/Components/Screens/LoginScreen";
import styles from "./assets/Components/Styles/Styles";
import firebase from "firebase";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Navigator from "./assets/Components/Navigation/Navigator";
import firestore from "@react-native-firebase/firestore";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./assets/reducers/index";

const middleware = applyMiddleware(thunkMiddleware);
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, storeEnhancers(middleware));

//firebase configs

const firebaseConfig = {
  apiKey: "AIzaSyCaTh1qBgJQjTQrJ-bAuwNE6rfTlTx92aQ",
  authDomain: "loginapppage.firebaseapp.com",
  projectId: "loginapppage",
  storageBucket: "loginapppage.appspot.com",
  messagingSenderId: "963527161930",
  appId: "1:963527161930:web:84a418fac185cd57b20eb3",
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}
