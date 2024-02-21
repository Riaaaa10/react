import { AppBar,Button,Toolbar,Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div><AppBar>
        <Toolbar>
            <Typography sx={{flexGrow:1}} align='left' variant='h6'>NAVBAR</Typography>
            <Button >
              <Link to={'/'} style={{color:"white"}}>Login</Link>
            </Button>
            <Button >
              <Link to={'/sign'} style={{color:"white"}}>Sign</Link>
            </Button>
            <Button >
              <Link to={'/counter'} style={{color:"white"}}>Counter</Link>
            </Button>
            <Button >
              <Link to={'/sign'} style={{color:"white"}}>Sign</Link>
            </Button>
            </Toolbar>
            </AppBar>
            </div>
  )
}

export default Navbar