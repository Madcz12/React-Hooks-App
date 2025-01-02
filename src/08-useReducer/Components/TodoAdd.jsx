import { useForm } from "../../hooks/useForm"


// eslint-disable-next-line react/prop-types
export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    })

    const onFormSubmit = (event) => {
        event.preventDefault();

        if(description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description, 
            done: false
        }

        onNewTodo(newTodo)
        onResetForm()

    }

  return (
    <form onSubmit={onFormSubmit}>
        <input 
            type="text" 
            name="description" 
            id="" 
            placeholder="Que hay que hacer?"
            className='form-control'
            value={description}
            onChange={onInputChange}
        />
        <button 
        type='submit'
        className='btn btn-outline-primary mt-1'>
            Agregar
        </button>
    </form>
  )
}