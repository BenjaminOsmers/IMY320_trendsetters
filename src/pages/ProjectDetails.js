import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        minWidth: "95vw",
        alignItems: "center",
        justifyContent: "center",
        pt: 20,
      }}
    >
      <Box position="fixed" top={100} left={50}>
        <Link to="/work" style={{ color: "#000" }}>
          <ArrowBackOutlinedIcon fontSize="large" />
        </Link>
      </Box>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", mb: 10, px: 10 }}
      >
        <Grid
          item
          xs={12}
          style={{
            background: `url(./images/carpool_text.png) no-repeat center center/cover`,
            paddingTop: 70,
            paddingBottom: 190,
            paddingLeft: 80,
          }}
        >
          <img
            src="./images/carpool.png"
            alt="carpool"
            style={{ width: "30%" }}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ mb: 20 }}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <img
            src="./images/carpool_screens.png"
            alt="carpool screens"
            style={{ width: "80%" }}
          />
        </Grid>
      </Grid>
      <Container sx={{ width: "35vw" }}>
        <Box>
          <Typography variant="h4" sx={{ mb: 1 }}>
            Carpool Ridesharing App
          </Typography>
          <Typography sx={{ mb: 10 }}>Description</Typography>
        </Box>
      </Container>
      <Container sx={{ width: "35vw" }}>
        <Box>
          <Typography variant="h4" sx={{ mb: 1 }}>
            Features
          </Typography>
          <Typography sx={{ mb: 20 }}>Description</Typography>
        </Box>
      </Container>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", mb: 10, px: 10 }}
      >
        <Grid
          item
          xs={12}
          style={{
            background: `url(./images/tech_stack.png) no-repeat center center/contain`,
            paddingTop: 200,
            paddingLeft: 80,
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "flex-end",
            }}
            spacing={15}
          >
            <Grid item xs={3}>
              <img
                src="./images/nx.png"
                alt="carpool"
                style={{ width: "60%" }}
              />
            </Grid>
            <Grid item xs={3}>
              <img
                src="./images/react_native.png"
                alt="carpool"
                style={{ width: "40%" }}
              />
            </Grid>
            <Grid item xs={3}>
              <img
                src="./images/graphql.png"
                alt="carpool"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={3}>
              <img
                src="./images/nestjs.png"
                alt="carpool"
                style={{ width: "80%" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectDetails;
