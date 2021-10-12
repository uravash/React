import React, { useState } from 'react'
import {addthingtodo} from '../Action/index';
import {useDispatch} from 'react-redux'
const Thingstodo = () => {
    const [thing, setThing] = useState('');
    const dispatch = useDispatch();
     return (
        <div style={{
            width: "426px",
            height: "100px",
            marginLeft: "297px",
            marginTop: "40px"
        }}>
            <form>
                <div class="mb-3" >
                    <h3 style={{ textAlign: "center", marginBottom: "20px" }}>THINGS TO DO</h3>
                    <input value={thing} onChange={(e) => setThing(e.target.value)} placeholder="Add New" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Learn ReactJs</label>
  </div>
  <hr/>
                <button onClick={()=>addthingtodo(thing)} type="submit" style={{ border: "none" }}><i class="fas fa-plus"></i></button>
            </form>
        </div>

    )
}

export default Thingstodo
