import { combineReducers } from 'redux';
import counterReducer from './reducers/counterSlice'
import MyCartReducer from './reducers/MyCartSlice';
import LoginReducer from './reducers/LoginReducer';
import ConfirmReducer from './reducers/ConfirmReducer';
import profileSlice from './reducers/profileSlice';

export default combineReducers({
    counter: counterReducer,
    cart: MyCartReducer,
    user: LoginReducer,
    confirm: ConfirmReducer,
    profile: profileSlice,
  })