import React from 'react';
import './todo.component.css';
import patterns from '../../validations/validation.js';
import TodoService from '../../services/todo-service.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.toastId = 'created';
        this.validate = patterns();
        this.input = React.createRef();
        this.todoService = new TodoService();
    }

    handlerChange = async (field, event) => {
        let state = this.state;
        state['name'] = event.target.value;

        if (event.key === 'Enter') {
            if (!this.handlerValidation()) {
                this.setState(state);
            } else {
                try {
                    this.cleanField();
                    const { data } = await this.todoService.createTodo(state);
                    state['name'] = data;
                    this.setState(state);
                } catch (err) {
                    throw new Error(err);
                }
            }
        }
    }

    handlerValidation = () => {
        let isValid = true;
        let state = this.state;

        if (!state['name']) {
            isValid = false;
            state['name'] = { error: this.validate.required.error };
        } else if (this.validate.textSpaces.regex.test(state['name'])) {
            isValid = true;
        } else {
            isValid = false;
            state['name'] = { error: this.validate.textSpaces.error };
        }

        return isValid;
    }

    cleanField = () => this.input.value = '';

    handlerToast = () => {
        let state = this.state;
        console.log(state, '¿STATE?')
        if (state['name'] && state['name']['status'] === 200) {
            const { success } = state['name'];
            toast.success(success, {
                position: "top-right",
                toastId: this.toastId,
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            return (
                <ToastContainer
                position="top-right"
                toastId={this.toastId}
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
            );
        }
    } 

    render () {
        return (
            <div className="container">
                <div className="col s12">
                    <div className="input-field col s6">
                        <i className="medium material-icons prefix">add_box</i>
                        <input type="text" id="name" name="name" ref={el => this.input = el} placeholder="TO DO" onKeyPress={ this.handlerChange.bind(this, "name") }/>
                    </div>
                </div>
                <div className="col s6 error">
                    <span>{ ( this.state['name'] && this.state['name']['error'] ) ? this.state.name.error : '' }</span>
                </div>
                { this.handlerToast() }
            </div>
        );
    }
}

export default Todo