import axios from "axios";

async function getAllTodos() {

    console.log('came to all todo service');

    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await fetch(
            "http://localhost:4000/api/v1/todo",
            requestOptions
        );
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        return {
            success: false,
            data: err
        };
    }
}

async function updateTodoStatus(id, status) {

    console.log('came to update to do status---------------');
    console.log(id, status);
    let response;
    try {
        response = await axios.patch('http://localhost:4000/api/v1/todo', {
            id: id,
            status: status ? 'completed' : 'pending'
        });
        console.log(response);
        return response;
    } catch (err) {
        console.log(err)
        return {
            success: false,
            data: err
        };
    }
}

async function createTodo(title) {

    let response;
    try {
        response = await axios.post('http://localhost:4000/api/v1/todo', {
            title: title,
        });
        console.log(response);
        return response;
    } catch (err) {
        console.log(err);
        return {
            success: false,
            data: err
        };
    }
}


export { getAllTodos, updateTodoStatus, createTodo };