import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const Zivan = () => {
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
            UI/UX Redesign
          </Typography>
          <Typography>by Zivan Haripershad</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ pr: 20 }}>
            This assignment tasked us with using Fitt's law to design a mobile
            layout for a catalogue of books. The client specified that they
            didn't want a table format for the books, but rather they be
            displayed in an informative list. Our interface also needed to draw
            in people that want to buy books.
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ px: 20, mb: 10 }} spacing={5}>
        <Grid item xs={6}>
          <img
            src="./images/zivan1.png"
            alt="Benjamin Osmers"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <img
            src="./images/zivan2.png"
            alt="Benjamin Osmers"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Zivan;
