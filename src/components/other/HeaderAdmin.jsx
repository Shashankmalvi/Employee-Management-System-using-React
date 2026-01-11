import React from 'react'

const HeaderAdmin = ({ handleLogout }) => {
  return (
    <div className='p-2 flex items-end justify-between'>
      <h1 className='text-2xl font-medium p-2'>
        <span className='text-3xl font-semibold'>H</span>ello{' '}
        <span className='text-3xl font-semibold'>A</span>dmin 👋
      </h1>

      <button
        onClick={handleLogout}
        className="px-5 py-2 text-sm font-medium rounded-lg
               bg-slate-900 text-rose-400
               border border-rose-500
               hover:bg-rose-600 hover:text-white
               active:scale-95
               transition-all duration-200"
      >
        Log Out
      </button>
    </div>
  )
}

export default HeaderAdmin
