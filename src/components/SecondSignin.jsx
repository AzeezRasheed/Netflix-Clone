import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../secondSignIn.css"
import { FirebaseContext } from './Firebase'
import * as ROUTES from './routes'
import { useNavigate } from 'react-router-dom'

function FormSignin() {

  // const [user, setUser] = useState({})
  const { firebase } = useContext(FirebaseContext)
  const [emailAddress, setEmailAdress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function HandleSubmit(e) {
    e.preventDefault()

    firebase.auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then((data) => {
        console.log(data)
        navigate(ROUTES.BROWSE)
        let { displayName, email } = data
        let user = {
          displayName,
          email
        }

        localStorage.setItem('user', JSON.stringify(user))
      })
      .catch((error) => {
        setEmailAdress('')
        setPassword('')
        setError(error.message)   
      })
    console.log(error)
  }

        useEffect(() => {
          let user = localStorage.getItem('user')
          if (user) {
            console.log("here!")
            return navigate('/browse')
          }else{ 
            localStorage.removeItem('user')
              return navigate('/signin')
            }
        }, [])
        // useEffect(() => {
        //   console.log(user)
        //   const listener = firebase.auth().onAuthStateChanged(user => {
        //    let user = localStorage.getItem('user')
        //    if (user) {
        //     console.log("here!")
        //     return navigate('/browse')
        //   }else{
        //     localStorage.removeItem('user')
        //     return navigate('/signin')
        //   }
        //  })
      
        //  return () => listener()
        // }, [])

  // function onChange(e){
  //   //  setInput(e.target.value)
  // }

  const isInvalid = password === '' || emailAddress === '';


  return (
    <div className='containerForSecondSignIn'>
      <h1 className='TitleSecondSignIn'>Sign In</h1>
      <span className={`${error && 'SpanError'}`} >{error && error}</span>
      <div onSubmit={HandleSubmit}>
        <form method='POST' className='FormSignIn'>
          <input className='InputSecondSignIn' placeholder='Email Address' value={emailAddress} type='email' onChange={(e) => { setEmailAdress(e.target.value) }} />
          <input className='InputSecondSignIn' placeholder='Password' value={password} type='password' autoComplete='off' onChange={(e) => { setPassword(e.target.value) }} />
          <button disabled={isInvalid} className='ButtonSecondSignIn' >Sign In</button>
        </form>
      </div>
      <p className='TextForSignIn'>New to Netflix? <Link className='LinkSecondSignIn' to='/signup'> Sign up now.</Link></p>
      <p className='smallTextForSignIn'>This is protected by Google reCAPCHA to ensure you're not a bot, Learn more</p>
    </div>
  )
}

export default FormSignin