import React from 'react';
import Login from './login';
import Header from './header';

function Navbar() {
  return (
    <div className='flex  '>
      <nav class="flex md:flex flex-grow flex-row justify-between space-x-1 bg-slate-300 ">
        <a href="/header" class="font-medium px-3 py-2 text-slate-700 flex justify-start  hover:bg-slate-100 hover:text-slate-900"><Header/></a> 
        <a href="/login" class="font-medium px-3 py-2 text-slate-700  hover:bg-slate-100 hover:text-slate-900 "><Login/></a>
      </nav>
    </div>
  )
}

export default Navbar