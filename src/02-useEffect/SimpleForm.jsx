import { useEffect } from "react";
import { useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Madcz12',
        email: 'madcz@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect(() => {
        //console.log('UE se llamó !');
    }, []);


    useEffect(() => {
        //console.log('formState cambió !');
    }, [formState]);

    useEffect(() => {
        //console.log('email cambió !');
    }, [email]);

  return (
    <>
        <h1>Formulario Simple</h1>
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

        {
            (username === 'Madcz12') && <Message/>
        }
            
    </>
  )
}
