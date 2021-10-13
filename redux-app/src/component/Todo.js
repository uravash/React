import React, { useState } from 'react';
import { Addtodo, Deletetodo, Removetodo } from '../Action/index';
import { useDispatch, useSelector } from 'react-redux';
import { Paper } from '@material-ui/core'


const Todo = () => {
    const [to, setTo] = useState('');
    const list = useSelector((state) => state.todoReducer.list)
    const dispatch = useDispatch();
    return (
        <div style={{ height: "625px", padding: "1px", backgroundImage: `url("https://st.depositphotos.com/1033604/4232/i/600/depositphotos_42324601-stock-photo-green-nature-background.jpg")` }}>

            <Paper elevation={3} style={{
                width: "42%",
                margin: "0 auto",
                backgroundImage: `url("https://thumbs.dreamstime.com/b/wild-flowers-plant-summer-autumn-nature-background-banner-website-55976971.jpg")`
            }}>
                <div style={{ justifyContent: "center" }}>

                    <h2 style={{ textAlign: "center", padding: "10px" }}>Add List ➕</h2>

                    <div>
                        <input style={{
                            marginLeft: "100px",
                            marginBottom: "13px", padding: "5px"
                        }} type="text" placeholder=" ✍️ Add items " value={to} onChange={(e) => setTo(e.target.value)} />
                        <i style={{ marginLeft: "8px", backgroundColor: "gray", padding: "4px", borderRadius: "5px" }} className="fas fa-plus" onClick={() => dispatch(Addtodo(to), setTo(''))}></i>
                    </div>

                </div>
                <div >
                    {
                        list.map((ele) => {
                            return (
                                <>
                                    <div style={{
                                        border: "1px solid gray", marginBottom: "10px", width: "191px",
                                        marginLeft: "100px", padding: "5px", display: "flex", justifyContent: "space-between"
                                    }} key={ele.id}>
                                        <span style={{ marginLeft: "5px" }} >{ele.data}</span>
                                        <i className="far fa-trash-alt" onClick={() => dispatch(Deletetodo(ele.id))} ></i>
                                    </div>

                                </>)
                        })
                    }

                </div>
                <div>
                    <button onClick={() => dispatch(Removetodo())} style={{ textAlign: "center", marginBottom: "20px", marginTop: "30px", marginLeft: "160px" }} type="button">Clear All</button>
                </div>

            </Paper>
        </div>

    )
}

export default Todo













