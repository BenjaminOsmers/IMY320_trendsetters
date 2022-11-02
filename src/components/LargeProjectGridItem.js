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
            transition: "all .2s ease-in-out",
            position: "relative",
            "&:hover": {
              transform: "scale(1.1)",
            },
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          <Typography
            variant="h3"
            color="#fff"
            fontWeight={900}
            sx={{ zIndex: 20 }}
          >
            {title}
          </Typography>
          <Typography color="#fff" sx={{ zIndex: 20 }}>
            {subtitle}
          </Typography>
        </Paper>
      </Link>
    </Grid>
  );
};

export default LargeProjectGridItem;
