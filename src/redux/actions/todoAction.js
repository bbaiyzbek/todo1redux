import axios from "axios";

export const getTodos = () => {
    return  (dispatch) => {
        axios(`https://64f4a858932537f4051a935c.mockapi.io/todo`)
            .then(res => dispatch({type: 'GET_TODOS', payload: res.data}))
    }
}

export const addTodo = (todo) => {
    return (dispatch) => {
        axios.post('https://64f4a858932537f4051a935c.mockapi.io/todo', todo)
            .then(res => dispatch({type: 'ADD_TODO', payload: res.data}))
    }
}

export const deleteTodo = todo => {
    return (dispatch) => [
        axios.delete(`https://64f4a858932537f4051a935c.mockapi.io/todo/${todo.id}`)
            .then(res => dispatch({type: 'DELETE_TODO', payload: res.data}))
    ]
}

export const editTodo = todo => {
    return (dispatch) => [
        axios.put(`https://64f4a858932537f4051a935c.mockapi.io/todo/${todo.id}`, todo)
            .then(res => dispatch({type: 'EDIT_TODO', payload: res.data}))
    ]
}