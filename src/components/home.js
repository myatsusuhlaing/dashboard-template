import React from 'react';
import Sidebar from './Dashboard/sidebar';
import Dashboard from './Dashboard/Dashboard';
import Map from './Dashboard/Map';
// import { Routes, Route, BrowserRouter } from "react-router-dom";

function Home() {
  return (
    <div className='home'>
      <div>
          {/* <BrowserRouter>
            <Routes>
              <Route path="/Dashboard" element={<Dashboard/>}/>
              <Route path="/Map" element={<Map/>}/>
            </Routes>
          </BrowserRouter> */}
          <Sidebar/>
      </div>
    </div>
  )
}

export default Home