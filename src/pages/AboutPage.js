import React, { useState } from "react";
import { Container, Typography, Box, Grid, Divider } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  const [image, setImage] = useState("./images/ben.png");
  const [member, setMember] = useState("ben");

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Trendsetters</title>
      </Helmet>
      <Masonry columns={2} spacing={15}>
        <Box sx={{ height: 300 }}>
          <Typography variant="h1" sx={{ fontWeight: 600 }}>
            About
          </Typography>
          <Typography>About</Typography>
        </Box>
        <Box>
          <img src="./images/about.gif" alt="about" style={{ width: "100%" }} />
        </Box>
        <Box>
          <img src="./images/hand.gif" alt="about" style={{ width: "100%" }} />
        </Box>
      </Masonry>
      <Container>
        <Typography
          variant="h1"
          sx={{ fontWeight: 600, textAlign: "center", mb: 5 }}
        >
          Meet Our Crew
        </Typography>
        <Grid container sx={{ mb: 20 }}>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Divider />
            <Box
              onClick={() => {
                setImage("./images/ben.png");
                setMember("ben");
              }}
              sx={{ py: 2 }}
            >
              <Typography
                variant="h5"
                color={member === "ben" ? "#000" : "#AAAAAA"}
              >
                Benjamin Osmers
              </Typography>
            </Box>
            <Divider
              sx={{
                borderColor: member === "ben" && "#4703A6",
                border: member === "ben" && 2,
              }}
            />
            <Box
              onClick={() => {
                setImage("./images/cameron_profile.png");
                setMember("cameron");
              }}
              sx={{ py: 2 }}
            >
              <Typography
                color={member === "cameron" ? "#000" : "#AAAAAA"}
                variant="h5"
              >
                Cameron Brammer
              </Typography>
            </Box>
            <Divider
              sx={{
                borderColor: member === "cameron" && "#4703A6",
                border: member === "cameron" && 2,
              }}
            />
            <Box
              onClick={() => {
                setImage("./images/zivan_profile.png");
                setMember("zivan");
              }}
              sx={{ py: 2 }}
            >
              <Typography
                variant="h5"
                color={member === "zivan" ? "#000" : "#AAAAAA"}
              >
                Zivan Haripershad
              </Typography>
            </Box>
            <Divider
              sx={{
                borderColor: member === "zivan" && "#4703A6",
                border: member === "zivan" && 2,
              }}
            />
            <Box
              onClick={() => {
                setImage("./images/naderah_profile.png");
                setMember("naderah");
              }}
              sx={{ py: 2 }}
            >
              <Typography
                variant="h5"
                color={member === "naderah" ? "#000" : "#AAAAAA"}
              >
                Naderah Limbada
              </Typography>
            </Box>
            <Divider
              sx={{
                borderColor: member === "naderah" && "#4703A6",
                border: member === "naderah" && 2,
              }}
            />
            <Box
              onClick={() => {
                setImage("./images/devank_profile.png");
                setMember("devank");
              }}
              sx={{ py: 2 }}
            >
              <Typography
                variant="h5"
                color={member === "devank" ? "#000" : "#AAAAAA"}
              >
                Devank Harripersad
              </Typography>
            </Box>
            <Divider
              sx={{
                borderColor: member === "devank" && "#4703A6",
                border: member === "devank" && 2,
              }}
            />
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
            <img src={image} alt="ben" style={{ height: 400 }} />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default AboutPage;
