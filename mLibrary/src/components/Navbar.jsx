import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{ padding:"10px", display:"flex", justifyContent:"space-around", border:"2px solid black"}}>
      <NavLink to="/" style={{border:"1px solid black", paddingInline:"5px", textDecoration:"none"  }} >Home</NavLink>
      {/* <NavLink to="/" style={{border:"1px solid black", paddingInline:"5px", textDecoration:"none"  }} >Book</NavLink> */}
      <NavLink to="/addNewBook"  style={{border:"1px solid black", paddingInline:"5px", textDecoration:"none"  }}>Add new Book</NavLink>
    </div>
  )
}

export default Navbar
