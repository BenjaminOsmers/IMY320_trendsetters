import React from "react";
import { Grid, Container, Typography, Paper } from "@mui/material";

const CarpoolScreenshots = () => {
  return (
    <Container sx={{ my: 10, minWidth: "80vw" }}>
      <Typography
        variant="h4"
        sx={{ mb: 10, fontWeight: "600", textAlign: "center" }}
      >
        Screenshots
      </Typography>
      <Grid container spacing={10}>
        <Grid item xs={3}>
          <Paper elevation={5} sx={{ borderRadius: 5 }}>
            <img
              src="./images/onboarding.png"
              alt="onboard screen"
              style={{ width: "100%", borderRadius: 20 }}
            />
          </Paper>
          <Typography
            variant="h6"
            sx={{ textAlign: "center", mt: 3, color: "#333" }}
          >
            Onboarding
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={5} sx={{ borderRadius: 5 }}>
            <img
              src="./images/login.png"
              alt="onboard screen"
              style={{ width: "100%", borderRadius: 20 }}
            />
          </Paper>
          <Typography
            variant="h6"
            sx={{ textAlign: "center", mt: 3, color: "#333" }}
          >
            Login
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={5} sx={{ borderRadius: 5 }}>
            <img
              src="./images/signup.png"
              alt="onboard screen"
              style={{ width: "100%", borderRadius: 20 }}
            />
          </Paper>
          <Typography
            variant="h6"
            sx={{ textAlign: "center", mt: 3, color: "#333" }}
          >
            Sign Up
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={5} sx={{ borderRadius: 5 }}>
            <img
              src="./images/homescreen.png"
              alt="onboard screen"
              style={{ width: "100%", borderRadius: 20 }}
            />
          </Paper>
          <Typography
            variant="h6"
            sx={{ textAlign: "center", mt: 3, color: "#333" }}
          >
            Home Screen
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={5} sx={{ borderRadius: 5 }}>
            <img
              src="./images/start:end.png"
              alt="onboard screen"
              style={{ width: "100%", borderRadius: 20 }}
            />
          </Paper>
          <Typography
            variant="h6"
            sx={{ textAlign: "center", mt: 3, color: "#333" }}
          >
            Trip Details
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={5} sx={{ borderRadius: 5 }}>
            <img
              src="./images/activeTrip.png"
              alt="onboard screen"
              style={{ width: "100%", borderRadius: 20 }}
            />
          </Paper>
          <Typography
            variant="h6"
            sx={{ textAlign: "center", mt: 3, color: "#333" }}
          >
            Active Trip
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={5} sx={{ borderRadius: 5 }}>
            <img
              src="./images/emer.png"
              alt="onboard screen"
              style={{ width: "100%", borderRadius: 20 }}
            />
          </Paper>
          <Typography
            variant="h6"
            sx={{ textAlign: "center", mt: 3, color: "#333" }}
          >
            Emergency Contact
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={5} sx={{ borderRadius: 5 }}>
            <img
              src="./images/requests.png"
              alt="onboard screen"
              style={{ width: "100%", borderRadius: 20 }}
            />
          </Paper>
          <Typography
            variant="h6"
            sx={{ textAlign: "center", mt: 3, color: "#333" }}
          >
            Trip Requests
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={5} sx={{ borderRadius: 5 }}>
            <img
              src="./images/cart.png"
              alt="onboard screen"
              style={{ width: "100%", borderRadius: 20 }}
            />
          </Paper>
          <Typography
            variant="h6"
            sx={{ textAlign: "center", mt: 3, color: "#333" }}
          >
            Trip Checkout
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={5} sx={{ borderRadius: 5 }}>
            <img
              src="./images/payment.png"
              alt="onboard screen"
              style={{ width: "100%", borderRadius: 20 }}
            />
          </Paper>
          <Typography
            variant="h6"
            sx={{ textAlign: "center", mt: 3, color: "#333" }}
          >
            Integrated Payment
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarpoolScreenshots;
