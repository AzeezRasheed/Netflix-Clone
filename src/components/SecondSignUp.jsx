import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import "../secondSignUp.css"
import { FirebaseContext } from './Firebase'
import * as ROUTES from './routes'
import { useNavigate } from 'react-router-dom'

function FormSignUp() {

    const navigate = useNavigate()
    const { firebase } = useContext(FirebaseContext)

    const [firstName, setFirstName] = useState('test')
    const [emailAddress, setEmailAdress] = useState('tesuser1@gmail.com')
    const [password, setPassword] = useState('rob1232p3#')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const isInvalid = firstName === '' || password === '' || emailAddress === '';


    function HandleSubmit(e) {
        e.preventDefault()
        setLoading(true)

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => {
                setLoading(false)
                // console.log(result)
                result
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5) + 1,
                    })
            })
            .then(() => {
                navigate(ROUTES.BROWSE)
            })
            .catch((err) => {
                setLoading(false)
                setEmailAdress('')
                setFirstName('')
                setPassword('')
                setError(err.message)
            })
    }
    return (
        <div className='containerForSecondSignUp'>
            <h1 className='TitleSecondSignUp'>Sign Up</h1>
            <span className={`${error && 'SpanError'}`} >{error && error}</span>
            <div onSubmit={HandleSubmit}>
                <form method='POST' className='FormSignUp'>
                    <input className='InputSecondSignUp' placeholder='First Name' value={firstName} type='text' onChange={(e) => { setFirstName(e.target.value) }} />
                    <input className='InputSecondSignUp' placeholder='Email Address' value={emailAddress} type='email' onChange={(e) => { setEmailAdress(e.target.value) }} />
                    <input className='InputSecondSignUp' placeholder='Password' value={password} type='password' autoComplete='off' onChange={(e) => { setPassword(e.target.value) }} />
                    <button disabled={isInvalid || loading} className='ButtonSecondSignUp' >Sign Up</button>
                </form>
            </div>
            <p className='TextForSignIn'>Already a user? <Link className='LinkSecondSignin' to='/signin'> Sign in now.</Link></p>
            <p className='smallTextForSignIn'>This is protected by Google reCAPCHA to ensure you're not a bot, Learn more</p>
        </div>
    )
}

export default FormSignUp 