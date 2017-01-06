import { createStore, combineReducers } from 'redux';
import mainReducer from 'stores/reducers/root';

const mainStore = createStore(mainReducer);

export default mainStore;
