import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef(); // establece una referencia al elemento HTMl donde se utilice
    console.log(inputRef)

    const onClick = () => {
        inputRef.current.select();
    }

  return (
    <>
        <h1>Focus screen</h1>
        
        <hr />

        <input
        ref={inputRef} 
        type="text"
        placeholder="Ingrese su nombre" 
        className="form-control"
        name="" 
        id="" 
        />

        <button 
        onClick={onClick}
        className="btn btn-primary mt-2"
        >
            Set Focus
        </button>

    </>
  )
}
