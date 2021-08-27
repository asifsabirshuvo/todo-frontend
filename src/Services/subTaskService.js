import axios from "axios";

async function updateSubtaskStatus(id, status) {

    console.log('came to update subtask status---------------');
    console.log(id, status);
    let response;
    try {
        response = await axios.patch('http://localhost:4000/api/v1/subtask', {
            id: id,
            status: status ? 'completed' : 'pending'
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

async function createSubtask(title, todoId) {

    console.log('creating subtask');
    let response;
    try {
        response = await axios.post('http://localhost:4000/api/v1/subtask', {
            title: title,
            todoId: todoId
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


export { updateSubtaskStatus, createSubtask };