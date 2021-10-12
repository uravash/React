import React, { useState } from 'react';
import { Addtodo } from '../Action/index';
import { useDispatch,useSelector} from 'react-redux';


const Todo = () => {
    const [to, setTo] = useState('');
     const list = useSelector((state) => state.todoReducer.list)
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <figure>
                    <figcaption>
                        Add List ➕
                    </figcaption>
                </figure>
                <div>
                    <input type="text" placeholder=" ✍️ Add items " value={to} onChange={(e) => setTo(e.target.value)} />
                    <i class="fas fa-plus" onClick={() => dispatch(Addtodo(to), setTo(''))}></i>
                </div>

            </div>
            <div >
                {
                list.map((ele)=>{
                    return(    <div key={ele.id}>
                        <h3>{ele.data}</h3>
                        {/* <i class="far fa-trash-alt" onClick={() => dispatch(Deletetodo(ele.id), setTo(''))}></i> */}
                    </div>)
               })
                }
            
            </div>

        </div>
    )
}

export default Todo




