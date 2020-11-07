import React from 'react'
import './Navbar.css';
import logo from '../../imgs/navbar-logo.png';

const NavbarLogo = () => {
    return(
      <div>
           <img src={logo} alt="Noris"/>
      </div>
    );
  }

const NavbarMenuButton = ({label, style}) => {
    return(
        <button className="navbar-menu-button" style={{...style}}>
            {label}
        </button>
    );
}

const LoginButton = () => {
    return(
        <button className="login-button">
            Login
        </button>
    );
}

const NavbarMenu = () => {
    return(
        <div className="navbar-menu">
            <div className="flex-row" style={{marginRight:125}}>
                <NavbarMenuButton label={'Company'} style={{marginRight:54}}/>
                <NavbarMenuButton label={'NoriS Engine'} style={{marginRight:54}}/>
                <NavbarMenuButton label={'NoriS Edu'}/>
            </div>
            <button className="contact-button">
                Contact
            </button>
            <LoginButton/>
        </div>
    );
}

export default function Navbar() {
    return (
        <div className='navbar'>
           <NavbarLogo/>
           <NavbarMenu/>
        </div>
    )
}
