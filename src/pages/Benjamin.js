import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const Benjamin = () => {
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
        <title>UI/UX Redesign | Trendsetters</title>
      </Helmet>
      <Box position="fixed" top={100} left={50}>
        <Link to="/work" style={{ color: "#000" }}>
          <ArrowBackOutlinedIcon fontSize="large" />
        </Link>
      </Box>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", mb: 10 }}
        spacing={3}
      >
        <Grid item xs={12} md={6} sx={{ pl: 20 }}>
          <Typography variant="h1" sx={{ fontWeight: "600" }}>
            UI/UX Redesign
          </Typography>
          <Typography>by Benjamin Osmers</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ textAlign: "center" }}>Projects</Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ px: 20, mb: 10 }}>
        <Grid item xs={12}>
          <img
            src="./images/benjamin_screenshot.png"
            alt="Benjamin Osmers"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Benjamin;
