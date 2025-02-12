const { render, screen } = require('@testing-library/react');
const { TodoApp } = require('../../src/08-useReducer/TodoApp');
const { useTodo } = require('../../src/hooks/useTodo');

jest.mock('../../src/hooks/useTodo')


describe('PRuebas en <TodoApp/>', () => { 

    useTodo.mockReturnValue({
        todos: [
            { id: 1, description: 'Todo #1', done: false },
            { id: 2, description: 'Todo #2', done: true },
        ], 
        todosCount: 2, 
        pendingTodosCount: 1, 
        handleDeleteTodo: jest.fn(),
        handleNewTodo: jest.fn(),
        handleToggleTodo: jest.fn()
    });

    test('Debe de mostrar el componente correctamente', () => { 

        render(<TodoApp/>)
        //screen.debug();

        expect(screen.getByText('Todo #1')).toBeTruthy();
        expect(screen.getByText('Todo #2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();

     })

 })