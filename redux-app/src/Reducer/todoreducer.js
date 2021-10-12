const initialData={
    list:[]
}
const todoReducer =(state=initialData,action)=>{

    switch (action.type) {
        case "Add":
            const {id,data}=action.payload;
         return{
             ...state,
             list:[
                 ...state.list,
                 {   
                     id: id,
                     data:data
                 }
             ]
         }
         
       
        default:
           return state;
    }
}
export default todoReducer;