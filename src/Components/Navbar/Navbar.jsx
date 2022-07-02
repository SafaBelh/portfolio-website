import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
        <div className="navbar-left-side">
            <div className="navbar-name">Andrew</div>
            <span>toggle</span>
        </div>
        <div className="navbar-right-side">
            <div className="navbar-list">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li> 
                    <li>Testimonials</li>

                </ul>
            </div>
            <button className="button">Contact me</button>

        </div>

    </div>
  )
}

export default Navbar