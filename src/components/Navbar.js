import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";

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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <Button variant="contained" color="primary" onClick={handleClickOpen}>Iniciar sesión</Button>
          <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { bgcolor: "#171717"} }}>
            <DialogTitle color={{ color:"white"}}>Inicia Sesion para poder agendar tu cita!</DialogTitle>
            <DialogContent>
              <DialogContentText color={{ color:"white"}}>
                Correo Electronico
              </DialogContentText>
              <TextField label="Correo Electronico"
                type="email"
                fullWidth
                variant="outlined"
                InputLabelProps={{style: {color:"#FF7A00"}}}/>
              <DialogContentText color={{ color:"white"}}>
                Contraseña
              </DialogContentText>
              <TextField label="Contraseña"
              type="password"
              fullWidth
              variant="outlined"/>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Resitrarse</Button>
              <Button onClick={handleClose}>Iniciar Sesion</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
