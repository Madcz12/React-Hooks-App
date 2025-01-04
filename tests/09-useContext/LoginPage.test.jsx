import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../src/09-useContext/LoginPage"
import { UserContext } from "../../src/09-useContext/context/UserContext"

describe('Pruebas en <LoginPage/>', () => { 

    const user = {
        id: 1234, 
        name: 'Mike',
        email: 'mike@mail.com'
    }

    test('Debe de mostrar el componente sin el usuario', () => { 

        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');

     });

     
    test('Debe de llamar el setUser cuando se hace click en el botón', () => {
        
        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const btnEvent = screen.getByRole('button');
        fireEvent.click(btnEvent);

        expect(setUserMock).toHaveBeenCalledWith({
            id: 1234, 
            name: 'Mike',
            email: 'mike@mail.com'
        })

    });

 })