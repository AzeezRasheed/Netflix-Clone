import React from 'react'
import {FaChevronRight} from 'react-icons/fa'
import '../Opts-form.css'
function Form() {
    return (
        <div className='container'>
            <form>
                <input className='input_forOpts_form' type="text" placeholder='Email Adress' />
                <button className='button_forOpts_form'>Try it now<FaChevronRight className='chevron__right'/></button>
            </form>
            <p className='paragraph_foroptsForm'>Ready to watch? Enter your email to create or restart your membership</p>
        </div>


    )
}

export default Form