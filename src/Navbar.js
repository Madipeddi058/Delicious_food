import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div style={{marginLeft:"350px"}}>
            <ul style={{display:"flex", gap:"40px", fontSize:"15px", listStyleType:"none" }}>
                <li>
                    <Link to="/Home" style={{textDecoration:"none", color:"black"}}>Home</Link>
                </li>
                <li><a href='#chef' style={{textDecoration:"none", color:"black"}}>About</a></li>
                <li>
                    <Link to="/menu" style={{textDecoration:"none", color:"black"}}>Menu</Link>
                </li>
                <li><a href='#lastdiv' style={{textDecoration:"none", color:"black"}}>Contact us</a></li>
                <li>
                    <Link to="/Signup" style={{textDecoration:"none", color:"black"}}>Signup</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
