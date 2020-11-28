import React from 'react'
import './Navbar.css';
import logo from '../../imgs/navbar-logo.png';
import { Grid } from '@material-ui/core';

const NavbarLogo = () => {
    return(
        <img src={logo} alt="Noris" style={{ width:'15%',}}/>
    );
  }

const NavbarMenuButton = ({label, style}) => {
    return(
        <button className="navbar-menu-button" style={{...style, whiteSpace:'nowrap',height:'100%'}}>
            {label}
        </button>
    );
}

const LoginButton = () => {
    return(
        <button className="login-button" style={{minWidth:150}}>
            Login
        </button>
    );
}

const NavbarMenu = () => {
    return(
        <div className="navbar-menu" style={{flex:1, justifyContent:'flex-end', height:'100%', paddingRight:20}}>
            <div className="flex-row" style={{marginRight:'15%'}}>
                <NavbarMenuButton label={'Company'} style={{marginRight:54}}/>
                <NavbarMenuButton label={'NoriS Engine'} style={{marginRight:54}}/>
                <NavbarMenuButton label={'NoriS Edu'}/>
            </div>
            <Grid container style={{width:'auto'}}>
                <button className="contact-button">
                    Contact
                </button>
                <LoginButton/>
            </Grid>
        </div>
    );
}

export default function Navbar() {
    return (
        <div className='navbar' style={{alignItems:'center'}}>
            <Grid container justify='space-between' alignItems='center' className='max-width' style={{height:'100%'}}>
                <NavbarLogo/>
                <NavbarMenu/>
            </Grid>
        </div>
    )
}
