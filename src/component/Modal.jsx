import React from 'react'
import { useState } from 'react';
const Modal = ({onClose}) => {
    const [username,setUsername]=useState('');
      const [email,setEmail]=useState('')
      const [phone,setPhone]=useState('')
      const [dateOfBirth,setDateOfBirth]=useState('');
      function handleForm(e){
         e.preventDefault();
         let date=new Date();
         let userDate=new Date(dateOfBirth);

         let currDay=date.getDate();
         let currYear=date.getFullYear();
         let currMonth=date.getMonth();
         let userD= userDate.getDate();
         let userYear=userDate.getFullYear();
         let userMonth=userDate.getMonth();
         console.log(currDay)
         console.log(userD)
         if(phone.length<10){
             alert('Invalid phone number. Please enter a 10-digit phone number.')
             return;
            }
         else if(currDay<userD||currYear<userYear||currMonth<userMonth){
            alert('Invalid date of birth. Date of birth cannot be in the future.')
            return
         }
         else{
            setUsername('');
            setEmail('');
            setPhone('');
            setDateOfBirth('');
         }

    }
  return (
    <div className='container' onClick={onClose}>
     <div className='formContainer' onClick={(e)=>e.stopPropagation()}>
            <h2>Fill Details</h2>
            <form onSubmit={handleForm}>
                <div className='formInputContainer'>
                  <label htmlFor="username">Username:</label>
                  <input required type="text" name='username' value={username} onChange={e=>setUsername(e.target.value)}/>
                </div>
                <div className='formInputContainer'>
                  <label htmlFor="email">Email:</label>
                  <input required type="email" name='email' value={email} onChange={e=>setEmail(e.target.value)}/>
                </div>
                <div className='formInputContainer'>
                  <label htmlFor="phone">Phone Number:</label>
                  <input required type="number" name='phone' value={phone} onChange={e=>setPhone(e.target.value)}/>
                </div>
                <div className='formInputContainer'>
                  <label htmlFor="dob">Date of Birth:</label>
                  <input required type="date" name='daob' value={dateOfBirth} onChange={e=>setDateOfBirth(e.target.value)}/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
        </div>
  )
}

export default Modal