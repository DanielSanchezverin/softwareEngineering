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
        height: "calc(100vh - 139px)",
        border: "1px solid #FF7A00"
      }}>
      <Grid container style={{ height: "100%",
        width: "100%",
        paddingLeft:"100px",
        paddingTop: "25px",
        paddingBottom: "25px"}}>
        <Grid item xs={6} style={{ height: "100%" }}>
          <div style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection:"column",
              justifyContent: "center",
            }}>
            <Typography variant="h2" fontWeight="700" color="white">
              Bienvenido a nuestra página web.
            </Typography>
            <Typography variant="h6" fontWeight="500" color="primary">
              Aquí podrás ver y agendar tus pagos.
            </Typography>
            <div>
            <Button variant="contained" color="secondary"size="large" style={{marginTop:"20px"}} onClick={handleGoToService}>Servicios</Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} style={{ height: "100%"}}>
          <img src="/images/header.png" alt="Heade image" style={{
            display:"block",
            height: "95%"
          }}></img>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeLayout;
