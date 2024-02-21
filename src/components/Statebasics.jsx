import { TextField, Typography,Button } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    //var fname='shri'
    var[fname,setFname]=useState("shriya");
    var[val,setVal]=useState()
    const handle=(e)=>{
        //console.log(e.target.value);
        //setFname(e.target.value);
        setVal(e.target.value);
         console.log(val);

    }
    const submit=()=>{
        console.log("clicked");
        setFname(val);

    }
  return (
    <div>
        <br /><br /><br /><br />
        <Typography>welcome {fname}</Typography>
        <br /><br /><br /><br />
        <TextField label='enter your name'onChange={handle}></TextField>
        <br /><br />
        <Button variant='outlined' onClick={submit} >submit</Button>
    </div>
  )
}

export default Statebasics