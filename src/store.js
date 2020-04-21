import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers';

const stringEnhancer = (createStore) => (...args) => {
  const store = createStore(...args);
  const originalDispatch = store.dispatch;
  store.dispatch = (action) => {
    if(typeof action === 'string') {
      return originalDispatch({
        type: action
      });
    }

    return originalDispatch(action);
  } 

  return store;
}

const logEnhancer = (createStore) => (...args) => {
  const store = createStore(...args);

  const originDispatch = store.dispatch;

  store.dispatch = (action) => {
    console.log(action.type);

    return originDispatch(action);
  } 

  return store;
}

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

const store = createStore(reducer, applyMiddleware(stringMiddleware, logMiddleware));

store.dispatch('HELLO_WORLD');

export default store;