import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, editTodo, getTodos} from "./redux/actions/todoAction";

function App() {
    const dispatch = useDispatch()
    const todoReducer = useSelector(state => state.todos)
    const [todo, setTodo] = useState({})

    useEffect(() => {
        dispatch(getTodos())
    },[dispatch])

    const handleAddTask = (e) => {
        e.preventDefault()
        if (todo.id){
            dispatch(editTodo(todo))
        }else{
            dispatch(addTodo(todo))
        }
        setTodo({})
    }

    const handleDelete = (todo) => {
        dispatch(deleteTodo(todo))
    }

    const handleEdit = (todo) => {
        setTodo(todo)
    }
    console.log(todo)

  return (
    <div className="container">
        <div>
            <form onSubmit={handleAddTask}>
                <div className="mb-3">
                    <label htmlFor="e xampleInputEmail1" className="form-label">Task title</label>
                    <input
                        onChange={(e) => setTodo({
                            ...todo,
                            task:  e.target.value
                        })}
                        value={todo.task || ''}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        onChange={(e) => setTodo({
                            ...todo,
                            completed: e.target.checked
                        })}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Completed</label>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
        <table className="table  table-hover">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Priority</th>
                <th scope="col">Completed</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            {
                todoReducer.map((todo, idx) =>
                        <tr key={todo.id} >
                            <th scope="row">{idx + 1}</th>
                            <td>{todo.task}</td>
                            <td>{todo.priority}</td>
                            <td>
                                <input  type="checkbox"  onChange={(e) => setTodo({
                                    completed: e.target.checked
                                })}/>
                            </td>
                            <td><button
                                className="btn btn-outline-danger mx-2"
                                onClick={() => handleDelete(todo)}>Delete</button>
                                <button
                                    className="btn btn-outline-dark"
                                    onClick={() => handleEdit(todo)}>Edit
                                </button></td>
                        </tr>
                )
            }
            </tbody>
        </table>
    </div>
  );
}

export default App;
