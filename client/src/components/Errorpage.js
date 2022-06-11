import React from 'react'
import { NavLink } from 'react-router-dom'
export const Errorpage = () => {
  return (
    <>
    
    <div id="notfound">
        <div className="container">
            <div className="notfound-404 d-flex justify-content-center">
                <h1>404  <br/>Sorry,We didn't page the found you looking for </h1>  
                 
            </div>
            <NavLink to='/'>Back To Homepage</NavLink>
        </div>
    </div>
    
    
    
    </>
  )
}
export default Errorpage
