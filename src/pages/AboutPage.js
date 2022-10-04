import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

const AboutPage = () => {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        minWidth: "70vw",
        alignItems: "flex-start",
        pt: 20,
      }}
    >
      <Masonry columns={2} spacing={15}>
        <Box sx={{ height: 300 }}>
          <Typography variant="h1" sx={{ fontWeight: 600 }}>
            About
          </Typography>
          <Typography>About</Typography>
        </Box>
        <Box>
          <img
            src="./images/about1.png"
            alt="about"
            style={{ width: "100%" }}
          />
        </Box>
        <Box>
          <img
            src="./images/about2.png"
            alt="about"
            style={{ width: "100%" }}
          />
        </Box>
      </Masonry>
      <Container>
        <Typography variant="h1" sx={{ fontWeight: 600, textAlign: "center" }}>
          Meet Our Crew
        </Typography>
      </Container>
    </Container>
  );
};

export default AboutPage;
