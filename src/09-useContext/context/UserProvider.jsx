import { useState } from "react"
import { UserContext } from "./UserContext"

/* const user = {
    id: 1234,
    name: 'Miguel Diamond',
    email: 'miguel@mail.com'
} */

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}
