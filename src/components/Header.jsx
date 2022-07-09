import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import Optform from './Opt-form2'
function Header() {
    return (
        <div className='background'>
            <header className='container_forHeader'>
                <img className='image_logo' src={logo} alt="" />
                <div className='link'>
                    <Link className='forButton' to='/signin' ><button className='button_forHeader'>Sign In </button></Link>
                </div>
            </header>
            <Optform />
        </div>
    )
}

export default Header