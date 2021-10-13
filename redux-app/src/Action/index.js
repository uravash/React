export const Addtodo =(data)=>{
  
    return{
        type:"Add",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }   
}
export const Deletetodo =(id)=>{
  
    return{
        type:"Delete",
        id
    }   
}

export const Removetodo =(data)=>{
  
    return{
        type:"Remove",
        
    }   
}


