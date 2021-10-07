import React, { useEffect, useState } from 'react'
import {Table} from 'react-bootstrap'


const ResListing = () => {
  const [postt, setPostt] = useState([]);
  useEffect(() => {
    const url = 'http://localhost:3000/Registration';
    fetch(url)
      .then(resp => resp.json())
      .then(resp1 => setPostt(resp1)
      )
  }, [])
  return (
    <>
    <div style={{ height: "300px", backgroundImage: ' url("https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?size=626&ext=jpg")' }}>
      <h1>Show Data</h1>
      <br /><Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            

          </tr>
        </thead>
        <tbody>
            {postt.map(item =>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.mobile}</td>
                <td>{item.email}</td>
                </tr>
            )}
          </tbody>
      </Table>
      </div>
    </>
  )
}

export default ResListing
