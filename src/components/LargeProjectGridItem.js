import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LargeProjectGridItem = ({ title, subtitle, image, link }) => {
  return (
    <Grid item xs={12} sm={12} md={8}>
      <Link to={`/${link}`} style={{ textDecoration: "none" }}>
        <Paper
          elevation={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: 300,
            background: `url(./images/${image}) no-repeat center center/cover`,
          }}
        >
          <Typography variant="h3" color="#fff" fontWeight={900}>
            {title}
          </Typography>
          <Typography color="#fff">{subtitle}</Typography>
        </Paper>
      </Link>
    </Grid>
  );
};

export default LargeProjectGridItem;
