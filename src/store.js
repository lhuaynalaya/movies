import { createStore, compose, combineReducers } from 'redux';
import { data as dataReducer } from './data/reducer';
import throttle from 'lodash/throttle';
import localStorage from './LocalStorage';

const appReducer = combineReducers({
  data: dataReducer
});

const store = createStore(
  appReducer,
  localStorage.loadState()
);

store.subscribe(throttle(() => {
  localStorage.saveState(store.getState())
}, 1000));

export default store;
