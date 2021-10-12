const initialList ={
    li:[]
}

const thingReducer=(state=initialList,action)=>{
    switch (action.type) {
        case 'added':
            const[id,data]=action.payload;
            return{
                ...state,
                li:[
                    ...state.li,
                    {
                    id:id,
                    data:data
                }]
            }
        default:
            return state;
    }

}
export default thingReducer;