import { Todo } from "../todos/models/todo.model";

const Filters ={
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pendig'
}


const state = {
    todos: [
        new Todo('Terminar esta pagina'),
        new Todo('Terminar esta pagina'),
        new Todo('Terminar esta pagina'),
        new Todo('Terminar esta pagina'),
        
    ],
    filter: Filters.All,
}


const initStore = () => {
    console.log(state);
    console.log('Store Iniciado 👾');
}
const loadStore=() =>{
    throw new Error ('No implementado');
}

const getTodos = (filter = Filters.All) =>{
    switch (filter) {
        case Filters.All:
            return [...state.todos];
        
        case Filters.Completed :
            return state.todos.filter( todo => todo.done)
        
        case Filters.Pending :
                return state.todos.filter( todo => !todo.done)    
    
        default:
            throw new Error (`Option ${Filters} is not valid`);
    }
    

}

/**
 * 
 * @param {String} description 
 */
const addTodos =( description ) =>{
    if (!description) throw new Error ('Se neccesita una descripcion'); 

    state.todos.push(new Todo(description));
}

const toggleTodo =(todoId) =>{

state.todos = state.todos.map( todo=>{

    if (todo.id === todoId) {
        todo.done = !todo.done;
    }
    return todo;

} )



}

/**
 * 
 * @param {String} todoId 
 */
const deleteTodo = (todoId) =>{
    state.todos = state.filter(todo => todo.id !== todoId );
}

const deleteCompleted = (todoId) =>{
    state.todos = state.filter(todo => todo.done );
}

/**
 * 
 * @param {Filters} newFilter 
 */

const setFilter = (newFilter = Filters.All) =>{
    state.filter = newFilter;
}
//conseguir el filtro actual
const getCurrentFilter = () =>{
    return state.filter;
}

export default {
    initStore,
    initStore,
    loadStore,
    getTodos,
    addTodos,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
}


