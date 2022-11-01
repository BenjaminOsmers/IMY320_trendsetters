import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "react-router-dom";

const HomeFooter = ({ color }) => {
  const [hover, setHover] = useState(false);
  const [hoverMail, setHoverMail] = useState(false);
  return (
    <Box
      position="fixed"
      bottom="0"
      sx={{
        display: "flex",
        flexDirection: "row",
        minWidth: "90vw",
        pb: 4,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link
        to="/contact"
        style={{
          color: { color },
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            border: 1,
            borderRadius: 50,
            width: 20,
            height: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
            borderColor: { color },
            backgroundColor: hover ? "#4703A6" : "transparent",
          }}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <MailOutlineIcon
            sx={{
              color: { color },
            }}
          />
        </Box>
        <Typography
          sx={{ textAlign: "center", color: { color }, pl: 2 }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Contact Us
        </Typography>
      </Link>
      <Typography
        color={color}
        onMouseEnter={() => setHoverMail(true)}
        onMouseLeave={() => setHoverMail(false)}
      >
        <a
          style={{
            color: "#fff",
            backgroundColor: hoverMail ? "#4703a6" : "transparent",
          }}
          href="mailto:info@trendsetters.com"
        >
          info@trendsetters.com
        </a>
      </Typography>
    </Box>
  );
};

export default HomeFooter;
