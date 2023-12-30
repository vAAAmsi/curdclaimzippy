const data = [{
    id : 1,
    title : 'vamsi',
    desc : 'eating'
}]

export const reducer = (state = data,action) => {
    const {type,payload} = action;
    console.log(payload)
    switch(type){
        case "ADD" : 
            return [...state,payload]
        case "DELETE" :
            const filtering = state.find(d => d.id === payload);
            if(filtering.id === payload){
                return state.filter(d => d.id !== payload)
            }
        case "Edit" :
            // console.log(payload)
            const finding = state.find(i => i.id === payload.id)
            
            if(finding){
                // console.log(payload.id -1)
                return state.splice(payload.id - 1 ,1,payload)
            }
        default : return state;
    }
}