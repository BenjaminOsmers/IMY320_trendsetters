import React from "react";
import { Container, Typography, Grid, Box, Button } from "@mui/material";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import LaunchIcon from "@mui/icons-material/Launch";

const Portfolio = () => {
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
            3D Design <br />
            Portfolio
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ pr: 20 }}>
            Design portfolio created as a 3D experience. The user can navigate
            through the portfolio by clicking on the different items. The
            project was created as part of the VIO202 module.
          </Typography>
          <Button
            variant="contained"
            endIcon={<LaunchIcon sx={{ color: "#fff" }} />}
            sx={{ backgroundColor: "#4703A6", mt: 3 }}
            href="https://vio202.herokuapp.com/"
            target="_blank"
          >
            visit
          </Button>
        </Grid>
      </Grid>
      <Grid container sx={{ px: 20, mb: 10 }}>
        <Grid item xs={12}>
          <img
            src="./images/port1.png"
            alt="Benjamin Osmers"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <img
            src="./images/port2.png"
            alt="Benjamin Osmers"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <img
            src="./images/port3.png"
            alt="Benjamin Osmers"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <img
            src="./images/port4.png"
            alt="Benjamin Osmers"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <img
            src="./images/port5.png"
            alt="Benjamin Osmers"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Portfolio;
