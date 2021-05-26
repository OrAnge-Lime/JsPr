import axios from 'C:/Users/orlov/ui/src/axios/ingex.js';

/* 
 Запрашивает список всех элементов
 */
export async function fetchTodos(){
    try{
        const response = await axios.get('/todos');
        return response.data.todos;
    } catch(error){
        console.error({error});
        throw error;
    }
}


/* 
 Создает новый элемент
 */
export async function createTodo({title, isCompleted}){
    try{
        const response = await axios.post('/todos', {
            title
        });
        return response.data;
    } catch(error){
        console.error({error});
        throw error;
    }
}

/* 
 Удаляет элеемнт по id
 */
export async function deleteTodoById(id){
    try{
        const response = await axios.delete('/todos/' + id);
        return response.data.todos;
    } catch(error){
        console.error({error});
        throw error;
    }
}

/* 
Обновление статут элемента с данным id
 */
export async function patchTodo({id, isCompleted}){
    try{
        const response = await axios.patch('/todos/' + id, {
            isCompleted
        });
        return response.data;
    } catch(error){
        console.error({error});
        throw error;
    }
}

/* 
 Удаляет весь список Todo
 */
 export async function deleteAllTodo(){
    try{
        const response = await axios.delete('/todos');
        return response.data.todos;
    } catch(error){
        console.error({error});
        throw error;
    }
}

