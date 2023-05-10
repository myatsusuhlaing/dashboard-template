import React from 'react'
import Sidebar from './sidebar';
import Navbar from '../Nav/Navbar';
import Box from '@mui/material/Box';

function Settings() {
  return (
    <>
    <Navbar/>
    <Box height={ 50 } />
    <Box sx={{display : "flex"  }}>
      <Sidebar/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Settings</h1>
      </Box>
    </Box>
    </>
  )
}

export default Settings