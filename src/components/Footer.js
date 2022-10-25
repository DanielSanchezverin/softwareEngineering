import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar component="nav" color="background" position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <img src="/images/logo_icon.png" style={{width: "63px",height: "61px"}} alt="logo_icon.png"></img>
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          © 2022 Consultoria Agroindustrial. All rights reserved.
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
