import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos } from './use-cases';
//para importar un archivo html debe NOMBRE?RAW

const ElementIDs = {
    //lo lamamos por si en futuro cambiamos de nombre, solo cambiamos de aca
    TodoList: '.todo-list',
}


/**
 * 
 * @param {String} elementId 
 */

export const App = (elementId) =>{

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoListTodoList, todos);
    }

   
//Cuando la funcion App se llama 
(()=>{

    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    //llamamos a la funcion 
    displayTodos();
})()

}



