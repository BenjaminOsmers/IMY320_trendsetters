import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const MenuLinkItem = ({ title, onClick }) => {
  return (
    <Box onClick={onClick}>
      <Link
        to={title === "home" ? "/" : `/${title}`}
        style={{ textDecoration: "none", color: "#fff" }}
      >
        <Typography
          variant="h2"
          sx={{ textAlign: "center", fontWeight: "600", py: 2 }}
        >
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </Typography>
      </Link>
    </Box>
  );
};

export default MenuLinkItem;
