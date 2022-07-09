import React from 'react'
import '../opt-form2.css'
function Optform() {
  return (
        <div className='container_forOpt2'>
        <h1 className='h1_forOptForm2'>Unlimited films, Tv programmes and more.</h1>
        <h2 className='h2_forOptForm2'>Watch anywhere, Cancel at any time</h2>
        <form >
            <input className='input_forOptForm2' type="text" placeholder='Email adress' />
            <button className='button_forOptForm2' >Try it now</button>
        </form>
        <h2 className='h2_forOptForm2'>Ready to watch? Enter Your email to create or restart your membership</h2>
        
    </div>
  )
}

export default Optform