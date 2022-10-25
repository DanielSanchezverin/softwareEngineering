/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const HomeLayout = () => {
  const navigate = useNavigate()
  function handleGoToService(){
    navigate("/services")
  }

  return (
    <div
      style={{
        margin: "0 0 0 0",
        backgroundColor: "#000000",
        height: "calc( 100vh - 100px )",
        border: "1px solid #FF7A00",
      }}>
      <Grid container style={{ height: "100%" }}>
        <Grid item xs={6} style={{ height: "100%" }}>
          <div style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection:"column",
              justifyContent: "center",
              paddingLeft:"30px"
            }}>
            <Typography variant="h1" fontWeight="800" color="white">
              Bienvenido a nuestra página web.
            </Typography>
            <Typography variant="h6" fontWeight="500" color="primary">
              Aquí podrás ver y agendar tus pagos.
            </Typography>
            <div>
            <Button variant="contained" color="secondary" size="large" style={{marginTop:"20px"}} onClick={handleGoToService}>Servicios</Button>
            </div>
          </div>
        </Grid>
        <Grid xs={6}>
          <img src="/images/header.png" alt="Heade image"></img>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeLayout;
