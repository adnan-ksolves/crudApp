const initialState=[];

const updateTch=(state=initialState,action)=>{
    switch(action.type){
        case "addTeacher":
            return [action.payload,...state];

        case "delTeacher":    
        return state.filter((val,i)=>{
            return i!==action.payload;
    });

        case "updateTeacher":
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

export default updateTch;