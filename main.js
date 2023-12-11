import './style.css'
// Debe ir entre {}
import {App} from './src/todos/app';
import todoStore from "./src/store/todo.store";

todoStore.initStore();

App ('#app');