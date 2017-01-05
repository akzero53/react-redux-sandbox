import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import MemoList from 'components/MemoList';

const root = document.getElementById('root');

const initialState = {
  hoge: 'hoge',
  fuga: 'fuga'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(
  reducer
)

ReactDOM.render(
  <Provider store={store}>
    <MemoList />
  </Provider>,
  root
);
