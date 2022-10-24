import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <div
          style={{
            backgroundColor: "#000000",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" color="white">The footer.</Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default Footer;
