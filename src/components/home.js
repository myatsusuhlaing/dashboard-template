import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import Map from './Dashboard/Map';
import Settings from './Dashboard/Settings';
import Login from './Auth/Login';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function Home() {
  return (
    <div className='home'>
      <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Dashboard/>}/>
              <Route path="/Map"  exact element={<Map/>}/>
              <Route path="/Settings"  exact element={<Settings/>}/>
              <Route path="/Login"  exact element={<Login/>}/>
            </Routes>
          </BrowserRouter>
      </div>
    </div>
  )
}

export default Home