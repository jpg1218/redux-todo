import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {TodoAppContainer} from './components/TodoApp';

// Instantiate new Redux Store
const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

// Set intial state
store.dispatch({
  type: 'SET_STATE',
  state: {
    todos: [
      {id: 1, text: 'React', status: 'active', editing: false},
      {id: 2, text: 'Redux', status: 'active', editing: false},
      {id: 3, text: 'Immutable', status: 'active', editing: false},
    ],
    filter: 'all'
  }
});

ReactDOM.render(
  <Provider store={store}>
      <TodoAppContainer></TodoAppContainer>
  </Provider>,
  document.getElementById('app')
);
