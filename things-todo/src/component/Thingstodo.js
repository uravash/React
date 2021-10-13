import React, { useState } from 'react'
import { addthingtodo, removethingtodo } from '../Action/index';
import { useDispatch, useSelector } from 'react-redux'
import { Paper } from '@material-ui/core';
import { Search, Delete } from '@material-ui/icons'
const Thingstodo = () => {
    const [thing, setThing] = useState('');
    const dispatch = useDispatch();
    const listing = useSelector((state) => state.thingstodoReducer.li)

    console.log(listing, "listing")
    return (
        <Paper elevation={3}
            className="paper"

        >
            <div className="main_div" >
                <form>
                    <div className="mb-3" >
                        <h3 className="h3" >THINGS TO DO</h3>
                        <input value={thing} onChange={(e) => setThing(e.target.value)} placeholder="Add New" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    {listing.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).map((ele) => {
                        return (
                            <>
                                <div className="mb-3 form-check" key={ele.id}>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">{ele.data}</label>

                                </div>
                                <hr />
                            </>
                        )
                    })}
                </form>
            </div>
            <div className="icon_div" ><i style={{ marginLeft: "20px" }} className="fas fa-plus" onClick={() => dispatch(addthingtodo(thing), setThing(''))}></i> <Search style={{ marginRight: "380px" }} /> <button type="submit" style={{ borderRadius: "10px" }} onClick={() => dispatch(removethingtodo())}>All</button></div>
        </Paper>
    )
}

export default Thingstodo
