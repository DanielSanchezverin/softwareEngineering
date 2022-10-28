import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  function handleGoToHome(){
    navigate("/")
  }
  function handleGoToService(){
    navigate("/service")
  }
  function handleGoToContact(){
    navigate("/Contact")
  }

  return (
    <AppBar component="nav" color="background" position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          <Button variant="contained" color="background" onClick={handleGoToHome}>
            <img src="/images/logo.png" style={{width: "180px",height: "55px"}} alt="logo.png"></img>
          </Button>
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Button sx={{ color: "#fff", marginRight: "50px" }} onClick={handleGoToHome}>Home</Button>
          <Button sx={{ color: "#fff", marginRight: "50px" }} onClick={handleGoToService}>Services</Button>
          <Button sx={{ color: "#fff", marginRight: "50px" }} onClick={handleGoToContact}>Contact</Button>
          <Button variant="contained" color="primary">Iniciar sesión</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
