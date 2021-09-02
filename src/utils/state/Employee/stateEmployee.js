import axios from '../../../utils/axios';
// import { axiosConfig } from '../../../utils/axios-config';
import { handleValidation } from '../../../utils/validator';
import { getDetailsActions } from '../details/state-details';

const types = {
  CREATE_EMPLOYEE: 'CREATE_EMPLOYEE',
  UPDATE_EMPLOYEE: 'UPDATE_EMPLOYEE',
  DELETE_EMPLOYEE: 'DELETE_EMPLOYEE',
  STORE_EMPLOYEE_FORM_DATA: 'STORE_EMPLOYEE_FORM_DATA'
};
export const employeeFormDataActions = {
  _storeEmployeeFormData: (fieldName, data) => ({
    type: types.STORE_EMPLOYEE_FORM_DATA,
    payload: { fieldName, data }
  }),
  // _storeLoginFormErrorData: (fieldName, data) => {
  //   let errorText = handleValidation(fieldName, data);
  //   return {
  //     type: types.STORE_LOGIN_FORM_ERROR_DATA,
  //     payload: {
  //       fieldName,
  //       error: errorText
  //     }
  //   };
  // },
  _updateEmployeeFormData: () => ({
    type: types.UPDATE_EMPLOYEE
  }),
  _onEmployeeSuccess: (data) => ({
    type: types.LOGIN_SUCCESS,
    payload: data
  }),
  _deleteEmployee: (data) => ({
    type: types.LOGIN_SUCCESS,
    payload: data
  }),

  handleEmployeeFormData: (fieldName, data) => (dispatch, getState) => {
    // Promise.resolve(
    //     dispatch(loginFormDataActions._storeLoginFormData(fieldName, data))
    // ).then((fieldName, data) => {
    //     //console.log(fieldName, data, handleValidation(fieldName, data))
    //     return dispatch(loginFormDataActions._storeLoginFormErrorData(fieldName, data))
    // });
    dispatch(employeeFormDataActions._storeEmployeeFormData(fieldName, data));
    return Promise.resolve();
  },
  employeeData: (credentials) => (dispatch, getState) =>
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
