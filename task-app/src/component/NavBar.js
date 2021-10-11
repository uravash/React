import React,{useState,useEffect} from 'react';
import { CardMembership, NotificationsNone, AccountTreeRounded, MoreHoriz, Security, Assessment, ImportContacts, StarOutline, Adjust, DeviceHub, Code, PlayCircleOutline } from "@material-ui/icons"
import './navbar.css'
const NavBar = () => {
   const [ta, setTa] = useState([]);
   useEffect(() => {
      const url=`https://api.github.com/repos/arkon/MERN-boilerplate/branches `;
      fetch(url).then(resp=>resp.json())
      .then(resp=>setTa(resp))
   }, [])
    return (
        <>
            <nav class="navbar navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <div class="logo" >
                            <img src="https://avatars.githubusercontent.com/u/18133?s=200&v=4" class="img-fluid" />
                        </div>
                    </a>
                    <button class="signup-btn" type="button" >Sign Up</button>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5></h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a href="#" class="sidetext">Why GitHub ?</a>
                                </li>
                                <hr />
                                <li class="nav-item">
                                    <a class="sidetext1" href="#">Team</a>
                                </li>
                                <hr />
                                <li class="nav-item">
                                    <a class="sidetext2" href="#">Enterprise</a>
                                </li>
                                <hr />
                                <li class="nav-item">
                                    <a class="sidetext3" href="#">Explore</a>
                                </li>
                                <hr />
                                <li class="nav-item">
                                    <a class="sidetext4" href="#">MarketPlace</a>
                                </li>
                                <hr />
                                <li class="nav-item">
                                    <a class="sidetext5" href="#">Pricing</a>
                                </li>
                                <hr />
                            </ul>
                            <form class="d-flex" style={{ marginTop: "40px" }} >
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            <form class="d-flex" style={{ marginTop: "40px", marginLeft: "100px" }}>
                                <button class="btn btn-outline-success" type="submit">Sign In</button>
                                <button style={{ marginLeft: "5px" }} class="btn btn-outline-success" type="submit">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
            <br />
            <div style={{ height: "87px" }} class="alert alert-warning" role="alert">
                <p class="ptag">This repository has been archived by the owner. It is now read-only.</p>
            </div>
           
            <div class="maindiv" >
                <div class="divone">
                    <div class="divtwo">
                        <CardMembership style={{ marginRight: "5px", marginLeft: "10px" ,color:"gray"}} />
                        <span class="reponame"> <b>Repository Name </b></span>
                        <button type="button" class="btnone" style={{color:"gray"}}> Public archive</button>
                    </div>
                    <div class="divv">
                        <button type="button" class="btnn" style={{color:"gray"}}>< NotificationsNone />  Notifications</button>
                        <button type="button" class="btnn" style={{color:"gray"}}>< StarOutline /> Start</button>
                        <button type="button" class="btnn" style={{color:"gray"}}> < DeviceHub />Fork</button>
                    </div>
                </div>

                <div class="divve">
                    <span class="sp" > <Code style={{color:"gray"}} />Code </span>
                    <span class="spo"> <Adjust style={{color:"gray"}}/>Issues &nbsp;</span>
                    <span class="spo" > <AccountTreeRounded style={{color:"gray"}} />Pull requests &nbsp;</span>
                    <span class="spo" > <PlayCircleOutline  style={{color:"gray"}}/>Action </span>
                    <span class="spt"> <Assessment  style={{color:"gray"}}/>Projects</span>
                    <span class="spt"> <ImportContacts style={{color:"gray"}}/>Wiki</span>
                    <span class="spt"> <Security style={{color:"gray"}} />Security</span>
                    <span class="spp" > <MoreHoriz style={{color:"gray"}} /></span>
                </div>
                
                <hr />
            </div>
            <div>

                {/* <div class="btn-group" style={{
                    marginRight: "800px", display: "flex",
                    justifyContent: "space-between"
                }}>
                <button type="button" style={{ color: "black", borderRadius: "5px", marginLeft: "30px", backgroundColor: "white", border: "1px solid black" }} class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        master
                </button>

                </div>
                <hr style={{ marginTop: "40px" }} /> */}
                <table class="table" style={{ marginTop: "5px" }}>

                    <thead>
                    <tr>
                      <th scope="col">Branch</th>
                      <th scope="col">Commits Url</th>
                      <th scope="col">Commits Code</th>
                    </tr>
                    </thead>
                    <tbody>
                    {ta.map(item =>
              <tr>
                <td>{item.name}</td>
                <td>{item.commit.url}</td>
                <td>{item.commit.sha}</td>
                
                
                </tr>
            )} 
                 </tbody>
                </table>
                <div></div>
               
            </div>
           
      
       
      
        </>
    )
}

export default NavBar
