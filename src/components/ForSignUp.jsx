import React from 'react'
// import './header.css'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import FormSignup from './SecondSignUp';
function Header() {
    return (
            <div className='background'>
            <header className='container_forHeader'>
                <img className='image_logo' src={logo} alt="" />
                <div className='link'>
                    <Link className='forButton' to='/signin' ><button className='button_forHeader'>Sign In</button></Link>
                </div>
            </header>
                <FormSignup/>
        </div>
      

    )
}

export default Header