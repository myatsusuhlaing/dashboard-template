import React from 'react';
import Navbar from './Nav/navbar';
import Sidebar from './Dashboard/sidebar';

function home() {
  return (
    <div className='home'>
    <div>
        <Navbar/>
    </div>
    <div>
        <Sidebar/>
    </div>
    </div>
  )
}

export default home