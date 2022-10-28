/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const HomeLayout = () => {
  const navigate = useNavigate()
  function handleGoToService(){
    navigate("/service")
  }
  function handleGoToContact(){
    navigate("/contact")
  }

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
        <Grid item xs={6} style={{ height: "100%" }}>
          <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '100vh' }}>
            <Typography variant="h2" fontWeight="700" color="white" align="center">
              Bienvenido a nuestra página web.
            </Typography>
            <Typography variant="h6" fontWeight="500" color="primary">
              Aquí podrás ver y agendar tus pagos.
            </Typography>
            <div>
              <Button variant="contained" color="secondary"size="large" style={{marginTop:"20px"}} onClick={handleGoToService}>Servicios</Button>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={6} style={{ height: "100%"}}>
          <img src="/images/header.png" alt="header"></img>
        </Grid>
        <Grid item xs={6} style={{ height: "100%"}}>
          <img src="/images/satisfacionSanitizacion.png" alt="satisfaccion"></img>
        </Grid>
        <Grid item xs={6} style={{ height: "100%" }}>
          <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '100vh' }}>
            <Typography variant="h2" fontWeight="700" color="white" align="center">
              Contactanos!
            </Typography>
            <Typography variant="h6" fontWeight="500" color="primary">
              Mira nuestras redes y nuestro numero de contacto.
            </Typography>
            <div>
              <Button variant="contained" color="secondary"size="large" style={{marginTop:"20px"}} onClick={handleGoToContact}>Contacto</Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeLayout;
