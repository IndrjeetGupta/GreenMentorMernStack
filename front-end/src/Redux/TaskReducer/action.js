
const token = localStorage.getItem("token")
console.log(token)


const handelTaskReq = () => {
    return { type: "GET_TASK_REQUEST" }
}

const handelTaskSuc = (payload) => {
    return { type: "GET_TASK_SUCCESS", payload: payload }
}

const handelTaskFail = () => {
    return { type: "GET_TASK_FAILURE" }
}


// get data

export const getTaskData = () => async (dispatch) => {

    dispatch(handelTaskReq())

    try {
        const response = await fetch("https://greenmentor-2-0hp9.onrender.com/api/tasks", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        console.log("Data:", responseData);
        dispatch(handelTaskSuc(responseData))

    } catch (error) {
        console.error("Error:", error);
        dispatch(handelTaskFail())
    }
}


export const postTaskData = (data, t) => async (dispatch) => {

    try {
        const response = await fetch("https://greenmentor-2-0hp9.onrender.com/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        console.log("Data:", responseData);
        alert("Task Add Successfully")
        dispatch(getTaskData())


    } catch (error) {
        console.error("Error:", error);
    }

}


export const deleteTaskData = (id) => async (dispatch) => {

    try {
        const response = await fetch(`https://greenmentor-2-0hp9.onrender.com/api/tasks/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        console.log("Task deleted successfully");
        alert("Task deleted successfully")
        dispatch(getTaskData())


    } catch (error) {
        console.error("Error:", error);
    }
}

// Patch data

export const updateTaskData = (id, updatedTask,) => async (dispatch) => {

 
    try {
        const response = await fetch(`https://greenmentor-2-0hp9.onrender.com/api/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(updatedTask)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        console.log("Task updated successfully");
        alert("Task updated successfully")

        dispatch(getTaskData());

    } catch (error) {
        console.error("Error:", error);
    }
}





