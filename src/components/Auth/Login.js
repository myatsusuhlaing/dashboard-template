import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    if(Cookies.get('accessToken')){
      navigate('/',{ replace: false });
    }
  },[navigate]);

  const handleLogin = () => {
    axios
      .post("http://121.54.167.132:8888/api/user/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          console.log(response);
          Cookies.set('accessToken', response.data.data.accessToken,{ expires: 7 });
          Cookies.set('refreshToken', response.data.data.refreshToken,{ expires: 30 });
          localStorage.setItem("isAuthenticated",true); 
          navigate('/',{ replace:false });
        }
        else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleLogin();
    }
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  if (Cookies.get("accessToken")) {
    return null;
  }

  return (
    <>
      <CssBaseline />
      <div className=" h-screen flex justify-center w-full md:w-auto items-center">
        <div className="border border-slate-500 rounded-lg sm:w-4/12 p-5 mx-auto flex flex-col">
          <h2 className="text-xl text-slate-700">
            Log In
            <hr className=" divide-y mt-2 border-2 border-slate-400"></hr>
          </h2>
          <Box
            component="form"
            paddingTop={3}
            sx={{
              "& > :not(style)": { m: 1, width: "28ch" },
            }}
            noValidate
            autoComplete="off"
          />
          <TextField
            id="standard-basic"
            label="Username"
            variant="standard"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            sx={{ paddingBottom: 2 }}
            onKeyPress={handleKeyPress}
          />
          <FormControl variant="standard" >
            <InputLabel htmlFor="standard-adornment-password">Password *</InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              onKeyPress={handleKeyPress}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Stack spacing={2} paddingTop={4}>
            <Button variant="contained" type="submit"  onClick={handleLogin}>
              Log In
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
}
  {/* <TextField
    id="filled-password-input"
    label="Password"
    type="password"
    autoComplete="current-password"
    variant="standard"
    value={password}
    onChange={(event) => setPassword(event.target.value)}
    required
  /> */}

