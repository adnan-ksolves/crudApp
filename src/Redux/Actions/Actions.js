export const addStudent=(data)=>{
    return{
        type:"addStudent",
        payload:data
    }
}

export const delStudent=(i)=>{
    return{
        type:"delStudent",
        payload:i
    }
}

export const updateStudent=(data,idx)=>{
    return{
        type:"updateStudent",
        payload:data,
        index:idx
    }
}

export const addTeacher=(data)=>{
    return{
        type:"addTeacher",
        payload:data
    }
}

export const delTeacher=(i)=>{
    return{
        type:"delTeacher",
        payload:i
    }
}

export const updateTeacher=(data,idx)=>{
    return{
        type:"updateTeacher",
        payload:data,
        index:idx
    }
}



