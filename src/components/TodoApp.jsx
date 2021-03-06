import React from 'react';
import TodoList from './TodoList';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

require("../../styles/app.scss");

export class TodoApp extends React.Component {
  render() {
    return <div className="helloKitty">
        <TodoList {...this.props}></TodoList>
    </div>
  }
};

function mapStateToProps(state) {
    return {
      todos: state.get('todos'),
      filter: state.get('filter')
    };
}

export const TodoAppContainer = connect(mapStateToProps, actionCreators)(TodoApp);
