import { TodoList } from './Components/TodoList';
import { TodoAdd } from './Components/TodoAdd';
import { useTodo } from '../hooks/useTodo';

/* ------------------------------------------------------------------------------- */
export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodo();

  return (
    <>
        <h1>TodoApp: {todosCount} <small>pendientes: { pendingTodosCount }</small> </h1>
        <hr />

        <div className="row">
            <div className="col-7">
                {/* TodoList */}
                <TodoList todos={ todos } onDeleteTodo={ handleDeleteTodo } onToggleTodo={handleToggleTodo} />
                {/* Fin TodoList */}
            </div>


            <div className="col-5">
                {/* TodoAdd onNewTodo(todo) */}
                {/* {id: new Date()..., description: '', done: false} */}
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd onNewTodo={ handleNewTodo }/>
                {/* Fin TodoAdd */}
            </div>
        </div>

    </>
  )
}
