import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const Devank = () => {
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
      <Grid container sx={{ display: "flex", alignItems: "center", mb: 10 }}>
        <Grid item xs={6} sx={{ pl: 20 }}>
          <Typography variant="h1" sx={{ fontWeight: "600", fontSize: 80 }}>
            UI/UX Redesign
          </Typography>
          <Typography>by Devank Harripersad</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ pr: 20 }}>
            The project tasked us with designing an app interface to display a
            catalogue of books. The requirements of the project conformed to
            displaying the information as a list that only showed the important
            information of the books. The design implemented minimal colours and
            combined with a simple layout and font; we created an optimal design
            for the client.
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ px: 20, mb: 10 }} spacing={5}>
        <Grid item xs={6}>
          <img
            src="./images/devank1.png"
            alt="Benjamin Osmers"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <img
            src="./images/devank2.png"
            alt="Benjamin Osmers"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Devank;
