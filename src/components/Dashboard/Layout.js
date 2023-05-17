import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import Navbar from '../Nav/Navbar';
import { Box } from '@mui/material';

function Layout() {
  return (
    <>
    <Box sx={{ pt: 10, px: 3 }}>
      <Navbar />
      <Sidebar />
      <Outlet />
    </Box>
    </>
  );
}

export default Layout;