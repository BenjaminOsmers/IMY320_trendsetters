import React from "react";
import { Box, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "react-router-dom";

const HomeFooter = ({ color }) => {
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
      <Box sx={{ border: 1, borderRadius: 50, p: 2, borderColor: { color } }}>
        <Link to="/contact" style={{ color: { color } }}>
          <MailOutlineIcon sx={{ color: { color } }} />
        </Link>
      </Box>
      <Typography color={color}>info@trendsetters.com</Typography>
    </Box>
  );
};

export default HomeFooter;
