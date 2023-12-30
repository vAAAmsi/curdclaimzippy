export const DataAdding = (payload)=> async dispatch => {
    dispatch({
        type : "ADD",
        payload : payload
    }
    )
}

export const Deleting = (payload) => async dispatch => {
    
    dispatch({
        type : "DELETE",
        payload : payload
    })
}

export const Editing = (payload) => async dispatch => {
    dispatch({
        type : "Edit",
        payload : payload
    })
}