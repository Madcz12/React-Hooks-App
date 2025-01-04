import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/Components/TodoItem";

describe('Pruebas en <Todoitem/>', () => { 

    const todo = { // sujeto de prueba 1 
        id: 1, 
        description: 'Piedra del alma', 
        done: false
    };

    const onDeleleTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => 
        jest.clearAllMocks() 
    );
    
    test('Debe de mostrar el Todo pendiente de completar', () => { 

        render(
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleleTodoMock } 
            />
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spamElement = screen.getByLabelText('span');
        expect(spamElement.className).toContain('align-self-center');

     });

     test('Debe de mostrar el Todo completado', () => { 

        todo.done = true;

        render(
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleleTodoMock } 
            />
        );


        const spamElement = screen.getByLabelText('span');
        expect(spamElement.className).toContain('text-decoration-line-through');

     });

     test('Span debe de llamar el toggleTodo cuando se hace click', () => { 

        render(
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleleTodoMock } 
            />
        );

        const spamElement = screen.getByLabelText('span');
        fireEvent.click(spamElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

      });

      test('Botón debe de llamar a la función onDeleteTodo', () => { 

        render(
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleleTodoMock } 
            />
        );

        const btnElement = screen.getByRole('button');
        fireEvent.click(btnElement);
        expect(onDeleleTodoMock).toHaveBeenCalledWith(todo.id);

      });

 })