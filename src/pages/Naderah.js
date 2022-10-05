import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const Naderah = () => {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        minWidth: "90vw",
        alignItems: "flex-start",
        pt: 20,
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Work | Trendsetters</title>
      </Helmet>
      <Box position="fixed" top={100} left={50}>
        <Link to="/work" style={{ color: "#000" }}>
          <ArrowBackOutlinedIcon fontSize="large" />
        </Link>
      </Box>
      <Grid container sx={{ display: "flex", alignItems: "center", mb: 10 }}>
        <Grid item xs={6} sx={{ pl: 20 }}>
          <Typography variant="h1" sx={{ fontWeight: "600", fontSize: 80 }}>
            3D Robot Design
          </Typography>
          <Typography>by Naderah Limbada</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ pr: 20 }}>
            The idea for this project was to create a unique robot model using
            the software 3Ds Max, using the wide variety of tools available in
            3Ds Max, such as shapes, lighting, textures, etc. Since this was a
            university assignment, I created my model in a way that showcases
            the skills I learnt, as well as aim for something that looks
            aesthetically pleasing.
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ px: 20, mb: 10 }}>
        <Grid item xs={12}>
          <img
            src="./images/naderah_project1.png"
            alt="Benjamin Osmers"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <img
            src="./images/naderah_project2.png"
            alt="Benjamin Osmers"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Naderah;
