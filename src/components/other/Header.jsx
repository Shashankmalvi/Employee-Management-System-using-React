import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
     window.location.reload()
  }

  
  return (
    <div className='flex p-2 items-end justify-between'>
        <h1 className='text-2xl font-medium p-2'> <span className='text-3xl font-semibold'>E</span>mployee  <span className='text-3xl font-semibold'>C</span>orner</h1>
        <button onClick={logOutUser} className="px-5 py-2 text-sm font-medium rounded-lg
             bg-slate-900 text-rose-400
             border border-rose-500
             hover:bg-rose-600 hover:text-white
             active:scale-95
             transition-all duration-200">Log Out</button>
    </div>
  )
}

export default Header
