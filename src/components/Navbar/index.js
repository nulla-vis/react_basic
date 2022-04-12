import React from "react";

import ReactLogo from '../../images/react-logo.png';

// Styles
import './styles.css'

const Navbar = () => {
    const style = {
        marginTop: "15px"
    }
    return(
        <nav className="nav">
            <img src={ReactLogo} alt="" className="nav-logo" />
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;