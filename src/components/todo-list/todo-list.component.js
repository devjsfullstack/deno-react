import React from 'react';
import TodoService from '../../services/todo-service.js';
import './todo-list.component.css';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
        this.todoService = new TodoService();
    }

    componentDidMount() {
        this.handlerRequest();
    }

    handlerRequest = async () => {
        try {
            const { data } = await this.todoService.getTodos();
            this.setState({ todos: data.data });
        } catch (err) {
            throw new Error(err);
        }
    }

    handlerList = () => {
        if (this.state.todos.length !== 0) {
            return (
                <div className="collection">
                    {
                        this.state.todos.map((todo, index) => <a href="." key={index} className="collection-item"><div>{ todo.name }<a href="." className="secondary-content"><i className="material-icons icon-color">delete_forever</i></a></div></a>)
                    }
                </div>
            );
        } else {
            return (
                <p className="flow-text todo-text">No se tienen registros.</p>
            );
        }
    }

    render () {
        return (
            <div className="container">
                <div className="col s12">
                    { this.handlerList() }
                </div>
            </div>
        );
    }
}

export default TodoList;