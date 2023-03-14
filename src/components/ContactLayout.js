import { Grid, Typography } from '@mui/material'
import React from 'react'

const ContactLayout = () => {
  return (
    <div style={{
      margin: "0 0 0 0",
      backgroundColor: "#000000",
      height: "100%",
      border: "1px solid #FF7A00"
    }}>
      <Grid container style={{
        height: "100%",
        width: "100%",
        paddingLeft: "100px",
        paddingTop: "25px",
        paddingBottom: "25px"
      }}>
        <Grid item xs={8}>
          <img src="/images/ContactImage.png" alt="Contacto" style={{ height: "100%", width: "100%" }}></img>
        </Grid>
        <Grid item xs={4} style={{ height: "100%" }}>
          <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}>
            <Typography variant="h2" fontWeight="700" color="white" align="center">
              Contactanos!
            </Typography>
            <Typography variant="h6" fontWeight="500" color="primary" align="center">
              Numero: 844-XXX-XXXX <br /> Correo electronico: XXXX@plagasysanitizacion.tk
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactLayout