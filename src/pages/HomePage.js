import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import HomeFooter from "../components/HomeFooter";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#010028",
        background: `url(./images/home.png) no-repeat center center/cover`,
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Welcome | Trendsetters</title>
      </Helmet>
      <Container
        sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              sx={{ textAlign: "center", fontWeight: "600", color: "#fff" }}
            >
              Hero Title
            </Typography>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", color: "#fff" }}
            >
              Welcome to trendsetters
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <HomeFooter color="#fff" />
    </div>
  );
};

export default HomePage;
