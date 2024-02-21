import { Button,Typography } from '@mui/material'
import React, { useState ,useEffect} from 'react'

const UseEffect = () => {
    var[x,setX]=useState();
    const react=()=>{
        setX("react");
    }
    const angular=()=>{
        setX("angular");
    }
    const next=()=>{
        setX("next");
    }
    useEffect(()=>{
        angular();
    },[])
  return (
    
    <div><br /><br /><br /><br /><Typography variant='h3'>welcome to {x} </Typography>
    <br /><br />
    <Button variant='contained' onClick={react} color='primary'>react</Button>
    <br /><br />
    <Button variant='contained' onClick={angular} color='secondary'>angular</Button><br /><br />
    <Button variant='contained' onClick={next} color='success'>next</Button></div>
  )
}

export default UseEffect