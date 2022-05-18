import login from '../../images/login-removebg-preview (1).png'
import React, { useState } from 'react';
import useAuth from '../../components/Hooks/useAuth';
import { Button, CircularProgress, Container, Grid, Snackbar, TextField, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useLocation , NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const [success,setSuccess]=useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSuccess(false);
      };
    const history=useNavigate();
    const location =useLocation();
    const {loginUser,user,isLoading,error,signInWithGoogle,logoutUser}=useAuth()
    const [userData,setUserData]=useState({})
    const handleChange=e=>{
        const textField=e.target.name;
        const inputValue=e.target.value;
        const newData={...userData};
        newData[textField]=inputValue;
        setUserData(newData);
    }
    const handleFormSubmit=e=>{
        loginUser(userData.email,userData.password,history,location)
        setSuccess(true)
        e.preventDefault();
    }
    const handleGoogleSignIn=()=>{
        signInWithGoogle(history,location)
        setSuccess(true)
    }
    const handleLogout=()=>{
        logoutUser()
    }
    return (
       <Container sx={{my:9,bgcolor:'#e6ee9c'}}>
           <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{mx:'auto',}}>
                   <form onSubmit={handleFormSubmit} >
                   <Typography variant="h4" sx={{fontFamily:"italic",fontWeight:'bold'}} gutterBottom component="div">
                        Login
                    </Typography>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-search"
                            label="Email"
                            type="email"
                            variant="standard"
                            color="warning"
                            name="email"
                            onChange={handleChange}
                            /><br/><br/>
                        <TextField
                        sx={{ width: '75%', m: 1 }}
                            id="standard-search"
                            label="Password"
                            type="password"
                            variant="standard"
                            name="password"
                            color="warning"
                            onChange={handleChange}
                            /><br/><br/>
                        <Button variant="contained" type="submit" sx={{ width: '75%', m: 1,bgcolor:"#5d4037",p:2}}>Login</Button>    
                   </form>
                   <NavLink to="/register" style={{textDecoration:"none"}}  >
                       <Button sx={{color:"#5d4037",fontWeight:"bold",my:4}} >New User ? PLease Register</Button>
                   </NavLink>
                   {isLoading && <CircularProgress/>}
                   {
                       success && <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
                       <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                       Login Successfully!
                       </Alert>
                        </Snackbar>
                   }
                    {error && <Alert severity="error">{error}</Alert>}

                    <br/><br/>
                    <Typography variant="body2"
                    sx={{color:'brown', fontSize:"30px",fontWeight:"bold"}}
                    >
                    Or
                    </Typography>
                    
                    <Button variant="contained" sx={{m:5,px:5,bgcolor:"#5d4037",p:2}} onClick={handleGoogleSignIn}>Sign In With Google</Button> <br/><br/>
                    {
                    user?.email && <Button variant="contained" sx={{px:5,bgcolor:"#5d4037",p:2}} onClick={handleLogout}>Logout</Button>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} width='520' alt="" />
                </Grid>
            </Grid>
       </Container>
    );
};

export default Login;