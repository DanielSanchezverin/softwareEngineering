import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";

const Footer = () => {
  return (
    <AppBar component="nav" color="background" position="static">
      <Toolbar>
        <img src="/images/logo_icon.png" alt="logo_icon.png"></img>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          © 2022 Consultoria Agroindustrial. All rights reserved.
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
