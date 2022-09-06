const initialState=[];

const updateStd=(state=initialState,action)=>{
    switch(action.type){
        case "addStudent":
            return [action.payload,...state];

        case "delStudent":    
        return state.filter((val,i)=>{
            return i!==action.payload;
    });

        case "updateStudent":
            const x=state.map((val,i)=>{
                if(i==action.index){
                    return action.payload;
                }else{
                    return val;
                }
        });
        return x;
        
    default: return state;
}
}

export default updateStd;
