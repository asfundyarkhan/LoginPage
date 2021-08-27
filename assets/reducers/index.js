import { combineReducers } from "redux";
import { LOGIN, SIGNUP, UPDATE_EMAIL, UPDATE_PASSWORD } from "../actions/users";

const initialState = { user: {}, token: "" };

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    case SIGNUP:
      return {
        ...state,
        user: action.payload.user,
      };
    case UPDATE_EMAIL:
      return { ...state, user: { ...state.user, email: action.payload } };
    case UPDATE_PASSWORD:
      return { ...state, user: { ...state.user, password: action.payload } };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
