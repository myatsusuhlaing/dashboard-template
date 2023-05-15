import * as React from 'react';
import { styled} from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from 'react-router-dom';
import { useAppStore } from '../../AppStore';
import Cookies from 'js-cookie';

export default function Navbar() {
const updateOpen = useAppStore((state) => state.updateOpen);
const dopen = useAppStore((state) => state.dopen);
const navigate = useNavigate();

  const AppBar = styled(MuiAppBar, {
  })(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
  }));


  const handleLogout = () => {
    Cookies.remove('accessToken');
    // setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    navigate('/login');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick = {() => updateOpen(!dopen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 }} 
            className='cursor-pointer' 
            onClick={() => {navigate("/")}} 
          >
            Admin Template
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Log Out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}