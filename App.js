import React from 'react';
import reducer from './src/reducer/reducer';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import HomeContainer from './src/containers/Home.container';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomeContainer/>
      </Provider>
    );
  }
}