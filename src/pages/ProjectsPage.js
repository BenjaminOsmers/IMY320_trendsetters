import React from "react";
import { Container, Typography, Grid, Box, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
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
      <Grid container sx={{ display: "flex", alignItems: "center", mb: 10 }}>
        <Grid item xs={6}>
          <Typography
            variant="h1"
            sx={{ textAlign: "center", fontWeight: "600" }}
          >
            Projects
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ textAlign: "center" }}>Projects</Typography>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Link to="/carpool" style={{ textDecoration: "none" }}>
          <Paper sx={{ borderRadius: 0, zIndex: 10 }} elevation={5}>
            <Grid container sx={{ borderLeft: 4, borderColor: "#4703A6" }}>
              <Grid item xs={6} sx={{ backgroundColor: "#EFEFEF", p: 5 }}>
                <Typography variant="h4">Carpool</Typography>
                <Typography>Mobile App Development</Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="./images/carpool.png"
                  alt="carpool"
                  style={{ width: "40%" }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Link>
        <Paper sx={{ borderRadius: 0, zIndex: 10 }} elevation={5}>
          <Grid container sx={{ borderLeft: 4, borderColor: "#4703A6" }}>
            <Grid item xs={6} sx={{ backgroundColor: "#EFEFEF", p: 5 }}>
              <Typography variant="h4">Carpool</Typography>
              <Typography>Mobile App Development</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="./images/carpool.png"
                alt="carpool"
                style={{ width: "40%" }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default ProjectsPage;
