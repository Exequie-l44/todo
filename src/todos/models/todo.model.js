//importamos la version 4 de uuid que sirve para generar id para cada todo 
import {v4 as uuid} from 'uuid';


//clase 
export class Todo {
    /**
     * 
     * @param {String} description 
     */
    constructor(description) {
        //propiedades 
        //llamamos a uuid
        this.id = uuid();
        this.description = description;
        this.done = false;
        this.cratedAt = new Date();



    }


}
