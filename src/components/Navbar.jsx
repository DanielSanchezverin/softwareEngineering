import { AppBar, Toolbar, Button, Grid, Container } from '@mui/material'
import React from 'react'
import logo from '../static/images/Logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo}></img>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar