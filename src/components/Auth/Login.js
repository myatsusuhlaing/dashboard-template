import  React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Login() {
  return (
    <>
      <CssBaseline />
      <div className=' h-screen flex justify-center w-full md:w-auto items-center'>
        <div className='border border-slate-500 rounded-lg sm:w-4/12 p-5 mx-auto flex flex-col'>
            <h2 className='text-xl text-slate-700'>
                Login In
                <hr className=" divide-y mt-2 border-2 border-slate-400"></hr>
            </h2>
            <Box
                component="form"
                paddingTop={3}
                sx={{
                    '& > :not(style)': { m: 1, width: '28ch' },
                }}
                noValidate
                autoComplete="off"
            />
            <TextField 
                id="standard-basic"  
                label="Username" 
                variant="standard" 
                sx={{paddingBottom :2 }}
            />
            <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
            />
            <Stack spacing={2} paddingTop={4}>
                <Button variant="contained">Login</Button>
            </Stack>
        </div>
      </div>
    </>
  );
}