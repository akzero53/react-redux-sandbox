import { combineReducers } from 'redux';
import logReducer from 'stores/reducers/log';
import memoReducer from 'stores/reducers/memo';

const rootReducer = combineReducers({
  logReducer: logReducer,
  memoReducer: memoReducer,
});

export default rootReducer;
