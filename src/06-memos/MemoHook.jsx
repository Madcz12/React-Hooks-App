import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos gege...')
    }

    return `${iterationNumber} iteraciones realizadas`;

}

export const MemoHook = () => {

    const {counter, increment} = useCounter(1200);
    // se declara un useState para que no afecte el comportamiento del hijo, en este caso el componente <Small/>
    const [show, setShow] = useState(true)

    // usaremos el useMemo para memorizar el valor del heavyStuff y no disparar su resultado cuando usemos el primer botón de incrementar
    const messageMemorized = useMemo(() => heavyStuff(counter), [counter])

  return (
    
    <>
        <h1>Counter: <small>{counter}</small></h1>
        <hr />

        <h4>{messageMemorized}</h4>

        <button 
        className="btn btn-primary"
        onClick={() => increment()}
        >
            +1
        </button>

        <button 
            className="btn btn-outline-primary"
            onClick={() => setShow(!show)}
        >
            Show/Hide {JSON.stringify(show)}
        </button>

    </>
  )
}
