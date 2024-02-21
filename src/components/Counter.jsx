import { Button, Typography } from '@mui/material'
import React,{useState} from 'react'

const Counter = () => {
  var[count,setCount]=useState(0)
  
  const handle=()=>{
    setCount(count+1);
  }
  const handle1=()=>{
    setCount(count-1);
  }
  return (
    
    <div>
      <br /><br /><br /><br /><Typography variant='h3'>Count:{count}</Typography>
    <br /><br /><br /><br />
    <Button variant='contained' color='success' onClick={handle}>+</Button><br /><br />
    <Button variant='contained' color='error' onClick={handle1}>-</Button>
    </div>
  )
}

export default Counter