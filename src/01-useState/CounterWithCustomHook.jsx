import { useCounter } from '../hooks/useCounter'


export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();


  return (
    <>
        <h1>Counter with hook: {counter}</h1>
        <hr />

        <button className="btn btn-success" onClick={() => increment()}>+1</button>
        <button className="btn btn-warning" onClick={() => reset()}>Reset</button>
        <button className="btn btn-danger" onClick={() => decrement()}>-1</button>
    </>
  )
}
