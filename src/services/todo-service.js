import axios from "axios";

class TodoService {

    URL_API = `http://127.0.0.1:3005/api/v1`

    createTodo = async (data) => {
        return await axios.post(`${this.URL_API}/create`, data, { "Headers": {"Content-Type": "application/json"} });
    }

    getTodos = async () => {
        return await axios.get(`${this.URL_API}/todos`, { "Headers": {"Content-Type": "application/json"} });
    }
}

export default TodoService;