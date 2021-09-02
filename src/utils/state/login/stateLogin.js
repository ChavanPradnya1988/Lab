import axios from 'axios';
import axiosConfig from '../../axiosConfig';
// import { handleValidation } from '../../../utils/validator';
// import { getDetailsActions } from '../details/state-details';
const types = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  RESET_LOGIN_FORM_DATA: 'RESET_LOGIN_FORM_DATA',
  STORE_LOGIN_FORM_DATA: 'STORE_LOGIN_FORM_DATA',
  STORE_LOGIN_FORM_ERROR_DATA: 'STORE_LOGIN_FORM_ERROR_DATA'
};
export const loginFormDataActions = {
  _storeLoginFormData: (fieldName, data) => ({
    type: types.STORE_LOGIN_FORM_DATA,
    payload: { fieldName, data }
  }),
  // _storeLoginFormErrorData: (fieldName, data) => {
  //   const errorText = handleValidation(fieldName, data);
  //   return {
  //     type: types.STORE_LOGIN_FORM_ERROR_DATA,
  //     payload: {
  //       fieldName,
  //       error: errorText
  //     }
  //   };
  // },
  _resetLoginFormData: () => ({
    type: types.RESET_LOGIN_FORM_DATA
  }),
  _onLoginSuccess: (data) => ({
    type: types.LOGIN_SUCCESS,
    payload: data
  }),
  _onLoginFailure: (data) => ({
    type: types.LOGIN_FAILURE,
    payload: data
  }),
  handleLoginFormData: (fieldName, data) => (dispatch, getState) => {
    dispatch(loginFormDataActions._storeLoginFormData(fieldName, data));
    return Promise.resolve();
  },
  loginUser: (credentials) => (dispatch, getState) =>
    axios()
      .post('https://localhost:44377/api/', { ...credentials, mobile: false }, axiosConfig)
      .then((response) => {
        if (response.data.isAuthenticated) {
          dispatch(loginFormDataActions._onLoginSuccess(response.data));
          // dispatch(getDetailsActions.getDetails());
        } else if (response.data.error === 'Email Not Confirmed') {
          console.log('email not confirmed');
          throw new Error('Email Not Confirmed');
        } else {
          throw new Error('Either Email or Password is wrong');
        }
      })
      //   if (!response.data.error) {
      //     console.log(getState());
      //     console.log(response.data);
      //     dispatch(loginFormDataActions._onLoginSuccess(response.data));
      //   } else {
      //     throw new Error(response.data.error);
      //   }
      // })
      .catch((err) => {
        if (err.message !== '') {
          console.log(err.message);
          dispatch(loginFormDataActions._onLoginFailure('Email is not registered'));
        } else {
          dispatch(loginFormDataActions._onLoginFailure(err));
        }
      })
};
const loginFormData = {
  loginError: '',
  credentials: {
    username: '',
    password: ''
  },
  errors: {
    username: '',
    password: ''
  },
  userData: {}
};
export function loginFormReducer(state = loginFormData, action) {
  switch (action.type) {
    case types.STORE_LOGIN_FORM_DATA:
      return {
        ...state,
        credentials: {
          ...state.credentials,
          [action.payload.fieldName]: action.payload.data
        }
      };
    case types.STORE_LOGIN_FORM_ERROR_DATA:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.fieldName]: action.payload.error
        }
      };
    case types.RESET_LOGIN_FORM_DATA:
      return {
        ...loginFormData
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.payload
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        loginError: action.payload,
        errors: { ...loginFormData.errors },
        credentials: { ...loginFormData.credentials }
      };
    default:
      return state;
  }
}
