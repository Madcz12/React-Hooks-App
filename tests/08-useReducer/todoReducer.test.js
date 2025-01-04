import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en el todoReducer', () => {

        const initialState = [{
            id: 1,
            description: 'Demo Todo', 
            done: false,
        }];
    
    test('Debe primero de regresar los estados iniciales', () => {
        
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState); // el tobe evalua que sea el mismo objeto vacio al igual que el toEqual y del mismo tipo

     });

     test('Debe de agregar un Todo', () => { 

        const action = {
            type: '[TODO] Add Todo', 
            payload: {
                id: 2, 
                description: 'Nuevo Todo #2', 
                done: false  
            }
        };
        // el tobe evalua que sea el mismo objeto vacio al igual que el toEqual y del mismo tipo
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2); 
        expect(newState).toContain(action.payload); // el toContain evalua qude tenga el action.payload 

      });

      test('Debe de eliminar un Todo', () => { 

        const action = {
            type: '[TODO] Remove Todo', 
            payload: 1
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);

       });

       test('Debe de realizar el toggle del Todo', () => {

        const action = {
            type: '[TODO] Toggle Todo', 
            payload: 1
        };

        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true); 

        });
 })