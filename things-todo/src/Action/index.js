export const addthingtodo =(data)=>{
    console.log(data)
    return{
        type:"added",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}