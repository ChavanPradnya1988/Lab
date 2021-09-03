import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';
// import * as initialStateReducers from './initial-state';
// import { contentRendered } from './state-content-rendered';
// import { contentResizedTracker } from '../components/toggler/connect-toggler';
// import { scrollPosition } from "./state-scroll-position";
// import { windowSize } from "./state-window-size";
import { loginFormReducer } from './login/stateLogin';

const allReducers = {
  // ...initialStateReducers,
  // contentRendered,
  // contentResizedTracker,
  loginFormData: loginFormReducer
  //   scrollPosition,
  //   windowSize
};
export default (history) =>
  combineReducers({
    // router: connectRouter(history),
    ...allReducers
  });
