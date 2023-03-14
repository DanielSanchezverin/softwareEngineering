import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Link } from "@mui/material";

const Navbar = () => {
  const navigate = useNavigate()
  function handleGoToHome() {
    navigate("/")
  }
  function handleGoToService() {
    navigate("/service")
  }
  function handleGoToContact() {
    navigate("/Contact")
  }

  const [openLogin, setOpenLogin] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);

  const handleClickOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleClickOpenRegister = () => {
    setOpenRegister(true);
  };

  const handleCloseRegister = () => {
    setOpenRegister(false);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  return (
    <AppBar component="nav" color="background" position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          <Button variant="contained" color="background" onClick={handleGoToHome}>
            <img src="/images/logo.png" style={{ width: "180px", height: "55px" }} alt="logo.png"></img>
          </Button>
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button sx={{ color: "#fff", marginRight: "50px" }} onClick={handleGoToHome}>Home</Button>
          <Button sx={{ color: "#fff", marginRight: "50px" }} onClick={handleGoToService}>Services</Button>
          <Button sx={{ color: "#fff", marginRight: "50px" }} onClick={handleGoToContact}>Contact</Button>
          <Button variant="contained" color="primary" onClick={handleClickOpenLogin}>Iniciar sesión</Button>
          <Dialog open={openLogin} onClose={handleCloseLogin}>
            <DialogTitle><Typography variant="h6" fontWeight="500" color="black">Inicia Sesion para poder agendar tu cita!</Typography></DialogTitle>
            <DialogContent>
              <DialogContentText>
                <Typography variant="h7" fontWeight="500" color="black">Correo Electronico</Typography>
              </DialogContentText>
              <TextField label="Correo Electronico"
                type="email"
                fullWidth
                variant="outlined" margin="normal" />
              <DialogContentText>
                <Typography variant="h7" fontWeight="500" color="black">Contraseña</Typography>
              </DialogContentText>
              <TextField label="Contraseña"
                type="password"
                fullWidth
                variant="outlined" margin="normal" color="primary" />
            </DialogContent>
            <DialogContentText align="center">
              <Typography variant="h10" fontWeight="500" color="black">Olvidaste tu Contraseña?
                <Link component="button"
                  variant="body2">
                  Click Aquí
                </Link>
              </Typography>
            </DialogContentText>
            <DialogActions>
              <Button open={openLogin} onClick={handleCloseLogin}>
                Registrarse
              </Button>
              <Button onClick={handleCloseLogin}>Iniciar Sesion</Button>
              <Dialog open={openRegister} onClose={handleCloseRegister}>
                <DialogTitle>
                  <Typography variant="h6" fontWeight="500" color="black">
                    Registrarte para comprar servicios!
                  </Typography>
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    <Typography variant="h7" fontWeight="500" color="black">Correo Electronico</Typography>
                  </DialogContentText>
                  <TextField label="Correo Electronico"
                    type="email"
                    fullWidth
                    variant="outlined" margin="normal" />
                  <DialogContentText >
                    <Typography variant="h7" fontWeight="500" color="black">Contraseña</Typography>
                  </DialogContentText>
                  <TextField label="Contraseña"
                    type="password"
                    fullWidth
                    variant="outlined" margin="normal" color="primary" />
                </DialogContent>
              </Dialog>
            </DialogActions>
          </Dialog>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
