import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const {onInputChange, username, onResetForm, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    //const { username, email, password } = formState;

    


  return (
    <>
        <h1>Formulario con Custom Hook</h1>
        <hr />

        <input 
            type="text" 
            className="form-control" 
            placeholder="Username" 
            name="username"
            value={username} 
            onChange={onInputChange}
        />
        
        <input 
            type="email" 
            className="form-control mt-2" 
            placeholder="miguel@mail.com" 
            name="email" 
            value={email}
            onChange={onInputChange}
        />

        <input 
            type="password" 
            className="form-control mt-2" 
            placeholder="contrasena" 
            name="password" 
            value={password}
            onChange={onInputChange}
        />
        
        <button className="btn btn-primary" onClick={onResetForm}>Borrar</button>
    </>
  )
}
