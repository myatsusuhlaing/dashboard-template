import React from 'react';
import Sidebar from './sidebar';
import Navbar from '../Nav/Navbar';
import Box from '@mui/material/Box';

function Map() {
  return (
    <>
    <Navbar/>
    <Box height={ 50 } />
    <Box sx={{display : "flex"  }}>
      <Sidebar/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Map</h1>
      </Box>
    </Box>
    </>
  )
}

export default Map