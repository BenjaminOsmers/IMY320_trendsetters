import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import HomeFooter from "../components/HomeFooter";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#010028",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Welcome | Trendsetters</title>
      </Helmet>
      <Container
        sx={[
          {
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            background: `url(./images/home.gif) no-repeat center center/contain`,
          },
          {
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.3)",
            },
          },
        ]}
      >
        <Grid container sx={{ zIndex: 20 }}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h1"
              sx={{ textAlign: "center", fontWeight: "600", color: "#fff" }}
            >
              Welcome to Trendsetters
            </Typography>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", color: "#fff" }}
            >
              A Design &amp; Development Studio
            </Typography>
            <Link to="/work" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  backgroundColor: "#fff",
                  width: "fit-content",
                  my: 3,
                  color: "#4703A6",
                  px: 3,
                  textDecoration: "none",
                  py: 2,
                  ":hover": {
                    backgroundColor: "#4703a6",
                    color: "#fff",
                  },
                }}
              >
                <Typography sx={{ fontWeight: "600" }}>
                  View Our Work
                </Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <HomeFooter color="#fff" />
    </div>
  );
};

export default HomePage;
