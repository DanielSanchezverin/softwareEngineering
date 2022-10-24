import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import logo from '../static/images/Logo.png'

const Navbar = () => {
  return (
    <AppBar position ="static">
      <Toolbar>
        <img src={logo} alt="logo" edge="start"/>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar