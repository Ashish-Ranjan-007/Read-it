import React from 'react';
import readit from "./readit.png";

function Header() {
  return (
    <>
    {/* <div className="header-container">
    <div><img className="readit-logo" src={readit} alt="companylogo"/></div>
    <div className="app-title"><h2>Readit</h2></div>
    <form><img className='searchicon'/><input type="text"/></form> */}

    <nav class="navbar navbar-light bg-light header-container">
    <div class="container-fluid">
   
      <div><img className="readit-logo" src={readit} alt="companylogo"/></div>
      <div className="app-title"><h2>Readit</h2></div>
      <form className="d-flex">
      <input className="form-control me-2 searchbox" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
      </nav>

    {/* </div> */}
    </>
  )
}

export default Header