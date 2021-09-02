import { createStore } from 'redux';

import allReducers from './root-reducer';

const store = createStore(rootReducer);

export default store;

// import thunk from 'redux-thunk';
// import { routerMiddleware } from 'connected-react-router';
// import { composeWithDevTools } from 'npm i redux';
// import { createLogger } from 'redux-logger';
// import { createBrowserHistory } from 'history';
// import { applyMiddleware, createStore } from 'redux';
// import createSelfcareReducers from './root-reducer';

// export const _history = createBrowserHistory();
// const logger = createLogger({ collapsed: true });
// const middleware = [
//   routerMiddleware(_history),
//   thunk,
//   window && window.env === 'development' && logger
// ].filter(Boolean);
// export const store = createStore(
//   createSelfcareReducers(_history),
//   composeWithDevTools(applyMiddleware(...middleware))
// );
