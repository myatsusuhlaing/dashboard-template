import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import Map from './Dashboard/Map';
import Settings from './Dashboard/Settings';
import Status from './Dashboard/Status';
import Login from './Auth/Login';
import WithAuth from './Auth/WithAuth';
import Layout from './Dashboard/Layout';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function Home() {
  const AuthenticatedDashboard = WithAuth(Dashboard);
  const AuthenticatedSettings = WithAuth(Settings);
  const AuthenticatedMap = WithAuth(Map);
  const AuthenticatedStatus = WithAuth(Status);
  return (
    <div className='home'>
      <div>
          <BrowserRouter>
            <Routes>
              <Route path="/Login"  exact element={<Login/>}/>
              <Route element={<Layout />}>
                <Route path="/" exact element={<AuthenticatedDashboard />}/>
                <Route path="/Map"  exact element={<AuthenticatedMap/>}/>
                <Route path="/Settings"  exact element={<AuthenticatedSettings />}/>
                <Route path="/status" exact element={<AuthenticatedStatus />}/>
              </Route>
            </Routes>
          </BrowserRouter>
      </div>
    </div>
  )
}

export default Home