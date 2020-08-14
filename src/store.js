import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const logMiddleware = ({getState}) => (dispatch) => (action) => {
  console.log(action.type, store.getState());
  return dispatch(action);
}

const stringMiddleware = () => (dispatch) => (action) => {
  if(typeof action === 'string') {
    return dispatch({
      type: action
    });
  }

  return dispatch(action);
}


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?    
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware,stringMiddleware, logMiddleware)
);

const store = createStore(
  reducer, 
  enhancer
);

const delayedActionCreator = (timeout) => (dispatch) => {
  setTimeout(() => {
    return dispatch({
      type: 'DELAYED_ACTION'
    })
  }, timeout);
}

store.dispatch(delayedActionCreator(3000));

export default store;