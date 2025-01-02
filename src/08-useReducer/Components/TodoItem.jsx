// eslint-disable-next-line react/prop-types
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li  className="list-group-item d-flex justify-content-between">
            <span 
            // eslint-disable-next-line react/prop-types
            className={`align-self-center ${ (todo.done) && 'text-decoration-line-through' }`}
            onClick={() => onToggleTodo( todo.id )}
            >
              {todo.description}
            </span>
            <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>Borrar</button>
    </li>
  )
}
