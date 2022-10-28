import { Grid, Typography, Button } from '@mui/material'
import React from 'react'

const ContactLayout = () => {
  return (
    <div style={{
      margin: "0 0 0 0",
      backgroundColor: "#000000",
      height: "100%",
      border: "1px solid #FF7A00"}}>
        <Grid container style={{ height: "100%",
        width: "100%",
        paddingLeft:"100px",
        paddingTop: "25px",
        paddingBottom: "25px"}}>
          <Grid item xs={6} style={{ height: "100%"}}>
            <img src="/images/SanitizacionImage.png" alt="Sanitizacion"></img>
          </Grid>
          <Grid item xs={6} style={{ height: "100%" }}>
            <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}>
              <Typography variant="h2" fontWeight="700" color="white" align="center">
                Necesitas ayuda cotizando?
              </Typography>
              <Typography variant="h6" fontWeight="500" color="primary">
                Con este servicio podras agendar una cita para hacer tu cotizacion!
              </Typography>
              <div>
                <Button variant="contained" color="secondary"size="large" style={{marginTop:"20px"}}>Cotizar</Button>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={6} style={{ height: "100%"}}>
            <img src="/images/ServiceImage.png" alt="Servicios"></img>
          </Grid>
          <Grid item xs={6} style={{ height: "100%" }}>
            <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}>
              <Typography variant="h2" fontWeight="700" color="white" align="center">
                Control de plagas <br></br> y <br></br> Sanitizacion
              </Typography>
              <Typography variant="h6" fontWeight="500" color="primary">
                Aqui podras seleccionar cualquiera de nuestros servicios!
              </Typography>
              <div>
                <Button variant="contained" color="secondary"size="large" style={{marginTop:"20px"}}>Seleccionar Servicio</Button>
              </div>
            </Grid>
          </Grid>
      </Grid>
    </div>
  );
};

export default ContactLayout