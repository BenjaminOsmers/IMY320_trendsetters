import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Divider,
  Box,
} from "@mui/material";
import HomeFooter from "../components/HomeFooter";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        margin: 0,
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact | Trendsetters</title>
      </Helmet>
      <Container
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          minWidth: "100vw",
          p: 0,
          m: 0,
        }}
      >
        <Grid container sx={{ p: 0, m: 0, minHeight: "100vh" }}>
          <Grid
            item
            xs={12}
            lg={5}
            style={{
              background: `url(./images/contact.gif) no-repeat center center/cover`,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h1"
              sx={{ fontWeight: "900", fontSize: 200, color: "#fff", mr: -15 }}
            >
              Get In <br />{" "}
              <span style={{ color: "#4703A6", paddingLeft: 200 }}>Touch</span>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={7}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: 15,
              pl: 30,
            }}
          >
            <Divider />
            <Box sx={{ display: "flex", py: 3 }}>
              <Typography variant="h6" sx={{ pr: 3, color: "#606060" }}>
                01
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h5">What's your name?</Typography>
                <TextField
                  id="standard-basic"
                  label="John Doe*"
                  variant="standard"
                  sx={{ width: "50%" }}
                />
              </Box>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", py: 3 }}>
              <Typography variant="h6" sx={{ pr: 3, color: "#606060" }}>
                02
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h5">What's your email?</Typography>
                <TextField
                  id="standard-basic"
                  label="john@example.com*"
                  variant="standard"
                  sx={{ width: "50%" }}
                />
              </Box>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", py: 3 }}>
              <Typography variant="h6" sx={{ pr: 3, color: "#606060" }}>
                03
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h5">
                  What services are you looking for?
                </Typography>
                <TextField
                  id="standard-basic"
                  label="Web design, Web development ...*"
                  variant="standard"
                  sx={{ width: "50%" }}
                />
              </Box>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", py: 3 }}>
              <Typography variant="h6" sx={{ pr: 3, color: "#606060" }}>
                04
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h5">Your message</Typography>
                <TextField
                  id="standard-basic"
                  label="Hi can you please help me with ...**"
                  variant="standard"
                  sx={{ width: "50%" }}
                />
              </Box>
            </Box>
            <Divider />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 5,
              }}
            >
              <Box
                sx={{
                  borderRadius: 100,
                  backgroundColor: "#4703A6",
                  p: 3,
                }}
              >
                <SendOutlinedIcon sx={{ color: "#fff" }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <HomeFooter color="#000" />
    </div>
  );
};

export default ContactPage;
