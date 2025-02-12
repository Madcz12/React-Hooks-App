import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en useForm', () => { 

    const initialForm = {
        name: 'Miguel',
        email: 'miguel@mail.com'
    }


    test('Debe de regresar los valores por defecto', () => {

        const { result } = renderHook( () => useForm(initialForm) );
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
        
     });

     test('Debe de cambiar el nombre del formulario', () => { 

        const newValue = 'Juan';
        // montar el hook
        // tomar el onInputChange, // act, event..
        // expect, result.current.name == newValue
        // exepect, result.current.formState.name = newValue;

        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange } = result.current;

        act( () => {
            onInputChange({ target: {name: 'name', value: newValue } });
        })

        expect( result.current.name ).toBe(newValue);
        expect( result.current.formState.name ).toBe(newValue);

      });

      test('Debe de realizar el reset del formulario', () => { 

        const newValue = 'Juan';
        // montar el hook
        // tomar el onInputChange, // act, event..
        // expect, result.current.name == newValue
        // exepect, result.current.formState.name = newValue;

        const { result } = renderHook( () => useForm(initialForm) );
        const { onResetForm } = result.current;

        act( () => {
            onResetForm();
        })

        expect( result.current.name ).toBe(initialForm.name);
        expect( result.current.formState.name ).toBe(newValue);

      });

 })