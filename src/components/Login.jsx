import { Typography,TextField,Button } from '@mui/material'
import React from 'react'


const Login = () => {
  return (

    <div>
            <h1>login page</h1>
            <input placeholder="username"/>
    <br /><br />
    <input placeholder='password'/>
    <br />
    <button>submit</button>
    <br /><br /><br /><br />
    <Typography variant='h1'>Login page</Typography>
    <TextField variant='filled' label='username' ></TextField>
    <TextField variant='outlined' label='username' ></TextField>
    <TextField variant='standard' label='username' ></TextField>
      <Button variant="text">submit</Button>
      <Button variant="contained">submit</Button>
      <Button variant="outlined">submit</Button>
      

    
    </div>
    
  )
}

export default Login