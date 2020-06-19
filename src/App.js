import React from 'react';
import Header from './components/header/header.component.js';
import Todo from './components/todo/todo.component.js';
import TodoList from './components/todo-list/todo-list.component.js';
import 'materialize-css/dist/css/materialize.min.css';

const  App = () => {
  return (
    <React.Fragment>
      <Header/>
      <Todo/>
      <TodoList/>
    </React.Fragment>
  );
}

export default App;
