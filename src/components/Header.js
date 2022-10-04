import React, { useState } from "react";
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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: show ? "#010028" : "transparent" }}
        elevation={0}
      >
        <Toolbar>
          <Typography
            variant="h3"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "900",
              pl: 3,
              color: show || location.pathname === "/" ? "#fff" : "#000",
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: show || location.pathname === "/" ? "#fff" : "#000",
              }}
            >
              t
            </Link>
          </Typography>
          <IconButton
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
          </IconButton>
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
                    src="./images/menu_image.png"
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
