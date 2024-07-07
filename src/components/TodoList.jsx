import React, {useState} from 'react';
import Form from './Form';
import {v4 as uuid4} from 'uuid'
import Todo from './Todo';
import Edit from './Edit';
uuid4()

const TodoList =() => {
    const [todoValue, setTodo] = useState([]);

    const createTodo = todo => {
        console.log(todo);
        setTodo([...todoValue, {id: uuid4(), task: todo,
        isEditing: false}])
    }
    const deleteTodo = id =>{
        setTodo(todoValue.filter(todo => todo.id!==id))}

    const editTodo = id =>{
        setTodo(todoValue.map(todo => todo.id===id?{...todo,
            isEditing:!todo.isEditing}: todo))
    }
    const editTask = (task, id) =>{
        setTodo(todoValue.map(todo =>todo.id === id?{...todo,
            task,isEditing: !todo.isEditing}:todo))
    }
    return(
        <div className='container bg-gray-700 mt-20 p-8 rounded-md'>
            <Form createTodo = {createTodo}/>
            {
            todoValue.map((todo, idx) =>(
                todo.isEditing?(
                    <Edit key={idx} editTodo={editTask} task={todo}/>
                ):(
                    <Todo task={todo} key={idx} deleteTodo={deleteTodo}
                    editTodo={editTodo}/>
                )
            ))
            }
        </div>
    );
};
export default TodoList;