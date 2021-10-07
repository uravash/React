import React,{useState} from "react";
import Showdata from './Showdata';

function Registration() {
  const[user,setUser]=useState({
   
  })
   const handleSubmit = (e)=>{
      fetch(`http://localhost:3000/Registration`, {
          method:"Post",
          headers : { 
            'Content-Type': 'application/json',
           },
           body: JSON.stringify(user)
        })
        .then((result) => result.json())
        .then((messages) => {alert(" Registration SuccessFully");});
   
      }
      const handleInputChange = (e) => {
         const { name, value } = e.target;
             setUser({
            ...user,
            [name]: value,
          });
        };
  return (
    <>
    <div style={{ height: "635px", backgroundImage: ' url("https://images.prismic.io/frameworkmarketplace/5d87bd50-8e78-4a7a-ade9-4356e3693416_Pre-Marketplace+-+image_02.jpg?auto=compress,format&w=1024")' }}>
      <div style={{marginLeft:"80px", textAlign: 'center', color: "white", borderRadius: "15px,15px,0px,0px" }}><br /><br /> <h1 style={{marginTop:"50px"}}>Registration</h1>
        <from >
          <input value={user.name} onChange={handleInputChange} type="text" placeholder="Name" name="name" /><br /><br />
          <input value={user.email} onChange={handleInputChange} type="email" placeholder="Email" name="email" /><br /><br />
          <input value={user.password}  onChange={handleInputChange} type="password" placeholder="Password" name="password" /><br /><br />
          <input value={user.mobile}  onChange={handleInputChange} type="mobile" placeholder="Mobile" name="mobile" /><br /><br />
          <button onClick={handleSubmit} >Submit</button><br /><br />
        </from>
      
      </div>
    </div>
    <br/>
<div style={{textAlign:"center",marginTop:"50px"}}> <Showdata/></div>
</>

  );
}

export default Registration;
