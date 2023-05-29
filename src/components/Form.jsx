import React from 'react'

const Form = () => {
  return (
    <form  className='form'>
            <div className='containerone'>
                <div className='flex flex-col ' >
                <label className='label'>name</label>
                <input className='flexinput btn'  type='text' required/>
                </div>
                <div className='flex flex-col' >
                <label className='label'>phone number</label>
                <input  className='flexinput btn' type='text' required/>
                </div>
            </div>
            <div className='othercontainer'>
                <label className='label'>email</label>
                <input className='input btn'  type='email' required/>
            </div>
            <div className='othercontainer'>
                <label className='label'>subject</label>
                <input className='input btn'  type='text' required/>
            </div>
            <div className='message'>
                <label className='msglabel'>message</label>
                <textarea className='btn msginput' rows={10}></textarea>
            </div>
            <button className='formbtn' type='submit'>send message</button>
       
        </form>
  )
}

export default Form