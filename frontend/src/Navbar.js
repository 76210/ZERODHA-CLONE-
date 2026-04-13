/*import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return ( 
       <div className='container p-2'> 
    <nav className="navbar navbar-expand-lg  border-bottom" style={{backgroundColor: "#FFF"}} >  
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">  
        <img src="media/images/logo.svg"style={{width:"25%"}} alt="Logo"/> 
    </Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
     
      <form className="d-flex" role="search">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"> 
          <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link> 
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About</Link> 
        </li>
         <li className="nav-item">
          <Link className="nav-link active" to="/products">Products</Link> 
        </li>  
         <li className="nav-item">
          <Link className="nav-link active"to="/pricing">Pricing</Link>   
        </li> 
        <li className="nav-item">  
          <Link className="nav-link active" to="/support">Support</Link>   
        </li>
        
      </ul> 
      </form>
    </div>
  </div>
</nav>
       </div>
     );
}
export default Navbar;*/  

import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {

  // ✅ Token check
  const token = localStorage.getItem("token");

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logout successful");
    window.location.href = "/login";
  };

  return ( 
    <div className='container p-2'> 
      <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#FFF"}}>  

        <div className="container-fluid">

          <Link className="navbar-brand" to="/">  
            <img src="media/images/logo.svg" style={{width:"25%"}} alt="Logo"/> 
          </Link> 

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <form className="d-flex" role="search">

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                {/* ✅ Agar login nahi hai to Signup show karo */}
                {!token && (
                  <li className="nav-item"> 
                    <Link className="nav-link active" to="/signup">Signup</Link> 
                  </li>
                )}

                <li className="nav-item">
                  <Link className="nav-link active" to="/about">About</Link> 
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" to="/products">Products</Link> 
                </li>  

                <li className="nav-item">
                  <Link className="nav-link active" to="/pricing">Pricing</Link>   
                </li> 

                <li className="nav-item">  
                  <Link className="nav-link active" to="/support">Support</Link>   
                </li>

                {/* ✅ Agar login hai to Logout show karo */}
                {token && (
                  <li className="nav-item">  
                    <button 
                      className="nav-link btn btn-link"
                      onClick={handleLogout}
                      style={{ textDecoration: "none" }}
                    >
                      Logout
                    </button>
                  </li>
                )}

              </ul>

            </form>
          </div>

        </div>

      </nav>
    </div>
  );
}

export default Navbar;
