import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10)

    const incrementFather = useCallback( // use utiliza para memorizar la posición de memoria a la que apunta la función,
        // por lo general se suelen pasar como primer argumento funciones 'set' y funciones 
      () => {
        setCounter((value) => value + 1);
      },
      [],
    )
    

    /* const incrementFather = () => {
        setCounter(counter+1);
    } */


  return (
    <>
        <h1>useCallback Hook: {counter} </h1>
        <hr />

        <ShowIncrement increment={incrementFather}/>
    </>
  )
}
