export const Addtodo =(data)=>{
  
    return{
        type:"Add",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }   
}



