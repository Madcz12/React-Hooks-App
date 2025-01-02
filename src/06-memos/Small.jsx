import { memo } from "react"


// eslint-disable-next-line react/display-name, react/prop-types
export const Small = memo(({value}) => {

    console.log('Me volvi a generar :( ')
  return (
    <small>{value}</small>
  )
})
