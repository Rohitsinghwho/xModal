import React, { useState } from 'react'
import Modal from './component/Modal';

const App = () => {
  
  const [showForm,setShowForm]=useState(false);
  
  const handleModal=()=>{
    setShowForm(!showForm)
  }
  
  return (
    <div className='mainContainer'>
        <div className='Main'>
        <h1>User Details Modal</h1>
        <button className='btnOpenForm' onClick={handleModal}>Open Form</button>
        </div>
     
      {showForm&&<Modal onClose={handleModal}/>}
    </div>
  )
}

export default App