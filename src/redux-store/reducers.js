const data = [{
    id : 1,
    title : 'vamsi',
    desc : 'eating'
}]

export const reducer = (state = data,action) => {
    const {type,payload} = action;
    
    switch(type){
        case "ADD" : 
            return [...state,payload]
        case "DELETE" :
            const filtering = state.find(d => d.id === payload);
            if(filtering.id === payload){
                return state.filter(d => d.id !== payload)
            }
            break;
        case "Edit" :
            const updatedState = state.map((item) => {
                if (item.id === payload.id) {
                  return {
                    ...item,
                    title: payload.title,
                    desc: payload.desc,
                  };
                } else {
                  return item;
                }
              });
              return updatedState;
              
        default : return state;
    }
}