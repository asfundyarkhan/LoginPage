import firebase from "firebase";

//define types

export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";
export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";

export const updateEmail = (email) => {
  return {
    type: UPDATE_EMAIL,
    payload: email,
  };
};

export const updatePassword = (password) => {
  return {
    type: UPDATE_PASSWORD,
    payload: password,
  };
};

export const login = (email, password) => {
  console.log(email, password);
  return async (dispatch) => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log(response.user);

      if (response) {
        const token = await response.user.getIdToken();
        dispatch({ type: LOGIN, payload: token });
        return true;
      } else return Promise.reject(response);
    } catch (e) {
      console.log("im here");
      console.log(e);
      return Promise.reject(e);
    }
  };
};

export const signup = (email,password) => {
  return async (dispatch) => {
    try {
      const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(
        email,
        password
      );

      if (response) {
      dispatch({ type: SIGNUP, payload: response.user });
      }else return Promise.reject(response);

    } catch (e) {
      console.log("error code here");
      console.log(e);
      return Promise.reject(e);
    }
  };
};
