import { TextField, Typography,Button } from '@mui/material'
import React,{useState} from 'react'

const Signup = () => {
    var[data,setData]=useState();
    const inputHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        console.log(data);
    } 
     return (
    <div> <br /><br /><br /><br />
        <Typography variant='h3'>SIGN-UP</Typography>
        <TextField variant='outlined' label='username' name='username' onChange={inputHandler}></TextField><br /><br />
        <TextField variant='outlined' label='password' name='password' onChange={inputHandler}></TextField><br /><br />
        <TextField variant='outlined' label='email' name='email' onChange={inputHandler}></TextField><br /><br />
        <TextField variant='outlined' label='address' name='address' onChange={inputHandler}></TextField> <br /><br />
        <Button variant='outlined' >Sign up</Button>

    </div>
  )
}

export default Signup