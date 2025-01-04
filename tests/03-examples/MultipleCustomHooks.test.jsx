import { render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch"

jest.mock('../../src/hooks/useFetch')


describe('Pruebas en <MultipleCustomHooks/>', () => { 
    test('Debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

         render(<MultipleCustomHooks/> ); 

        /* expect(screen.getByText('Loading...'))
        expect(screen.getByText('Loading...')) */

         screen.debug();
     })


     test('Debe de mostrar un quote', () => {
        
        render(<MultipleCustomHooks/>);
        screen.debug();
      })
 })