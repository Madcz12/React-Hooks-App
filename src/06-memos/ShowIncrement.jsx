
// eslint-disable-next-line react/prop-types
export const ShowIncrement = ({ increment }) => { // desestructuramos de las props increment

    console.log('Me volvi a generar :( ')

  return (
    <button
        className="btn btn-primary"
        onClick={() => {
            increment();
        }}
    >
        Incrementar
    </button>
  )
}
