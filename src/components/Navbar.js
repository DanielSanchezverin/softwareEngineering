import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const navItems = ["Home", "Services", "Contact"];

const navbar = () => {
  return (
    <AppBar component="nav" color="background">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          MUI
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: "#fff", marginRight: "50px" }}>
              {item}
            </Button>
          ))}
          <Button variant="contained" color="primary">Iniciar sesión</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default navbar;
