import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  Container,
  Slide,
} from "@mui/material";
import GrainIcon from "@mui/icons-material/Grain";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import MenuLinkItem from "./MenuLinkItem";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: offset !== 0 ? "rgba(0, 0, 0, 0.7)" : "transparent",
          pt: 2,
          pb: 2,
        }}
        elevation={0}
      >
        <Toolbar>
          <Link
            to="/"
            style={{
              flex: 2.5,
              textDecoration: "none",
              color:
                offset !== 0 || location.pathname === "/" ? "#fff" : "#000",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                flex: 2.5,
                fontWeight: "900",
                pl: 5,
                color:
                  offset !== 0 ||
                  location.pathname === "/" ||
                  location.pathname === "/contact"
                    ? "#fff"
                    : "#000",
                ":hover": {
                  color: "#4703A6",
                },
              }}
            >
              trendsetters
            </Typography>
          </Link>
          <Box
            sx={{
              flex: 1,
              pr: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color:
                  location.pathname === "/" || offset !== 0 ? "#fff" : "#000",
                fontWeight: "600",
              }}
            >
              <Typography
                sx={{
                  borderBottom:
                    location.pathname === "/" ? "3px solid #4703A6" : "none",
                  ":hover": {
                    borderBottom:
                      location.pathname !== "/" && "3px solid #4703A6",
                  },
                  fontWeight: "500",
                }}
              >
                Home
              </Typography>
            </Link>
            <Link
              to="/work"
              style={{
                textDecoration: "none",
                color:
                  location.pathname === "/" || offset !== 0 ? "#fff" : "#000",
                fontWeight: "600",
              }}
            >
              <Typography
                sx={{
                  borderBottom:
                    location.pathname === "/work"
                      ? "3px solid #4703A6"
                      : "none",
                  ":hover": {
                    borderBottom:
                      location.pathname !== "/work" && "3px solid #4703A6",
                  },
                  fontWeight: "500",
                }}
              >
                Work
              </Typography>
            </Link>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color:
                  location.pathname === "/" || offset !== 0 ? "#fff" : "#000",
                fontWeight: "600",
              }}
            >
              <Typography
                sx={{
                  borderBottom:
                    location.pathname === "/about"
                      ? "3px solid #4703A6"
                      : "none",
                  ":hover": {
                    borderBottom:
                      location.pathname !== "/about" && "3px solid #4703A6",
                  },
                  fontWeight: "500",
                }}
              >
                About
              </Typography>
            </Link>
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                color:
                  location.pathname === "/" || offset !== 0 ? "#fff" : "#000",
                fontWeight: "600",
              }}
            >
              <Typography
                sx={{
                  borderBottom:
                    location.pathname === "/contact"
                      ? "3px solid #4703A6"
                      : "none",
                  ":hover": {
                    borderBottom:
                      location.pathname !== "/contact" && "3px solid #4703A6",
                  },
                  fontWeight: "500",
                }}
              >
                Contact
              </Typography>
            </Link>
          </Box>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setShow(!show)}
          >
            {show ? (
              <HighlightOffOutlinedIcon
                sx={{
                  color: show || location.pathname === "/" ? "#fff" : "#000",
                }}
              />
            ) : (
              <GrainIcon
                sx={{
                  color: show || location.pathname === "/" ? "#fff" : "#000",
                }}
              />
            )}
          </IconButton> */}
        </Toolbar>
        {show && (
          <Slide direction="down" in={show} mountOnEnter unmountOnExit>
            <Container
              sx={{
                minHeight: "100vh",
                minWidth: "80vw",
              }}
            >
              <Grid container>
                <Grid item xs={6} sx={{ pt: 5 }}>
                  <img
                    src="./images/home.gif"
                    alt="Menu"
                    style={{ width: "80%" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    pt: 25,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <MenuLinkItem title="home" onClick={() => setShow(false)} />
                  <MenuLinkItem title="work" onClick={() => setShow(false)} />
                  <MenuLinkItem title="about" onClick={() => setShow(false)} />
                  <MenuLinkItem
                    title="contact"
                    onClick={() => setShow(false)}
                  />
                </Grid>
              </Grid>
            </Container>
          </Slide>
        )}
      </AppBar>
    </Box>
  );
};

export default Header;
