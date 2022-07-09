import React from 'react'
// import './header.css'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import FormSignin from './SecondSignin';
function Header() {
    return (
        <div className='background'>
            <header className='container_forHeader'>
                <img className='image_logo' src={logo} alt="" />
                <div className='link'>
                    <Link className='forButton' to='/signup' ><button className='button_forHeader'>Sign Up </button></Link>
                </div>
            </header>
            <FormSignin/>
        </div>
    )
}

export default Header