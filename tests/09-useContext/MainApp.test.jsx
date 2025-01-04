import { render, screen } from "@testing-library/react"
import { MainApp } from "../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router-dom"

describe('Pruebas en <MainApp/>', () => { 

    test('Debe de mostrar el <HomePage/>', () => { 

        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        );

        expect(screen.getByText('HomePage')).toBeTruthy();
        
     });

     test('Debe de mostrar el <LoginPage/>', () => { 

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        );

        expect(screen.getByText('LoginPage')).toBeTruthy();
        
     });

     test('Debe de tener los NavLinks en active', () => { 

        const isNavActive = screen.getByLabelText('nav');
        //expect(isNavActive.className).toContain({({isActive}) => `nav-link ${isActive ? 'active' : ""}`})

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        );

        expect(screen.getByText('LoginPage')).toBeTruthy();
        
     });

 })