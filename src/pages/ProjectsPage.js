import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import { Helmet } from "react-helmet";
import ProjectGridItem from "../components/ProjectGridItem";

const ProjectsPage = () => {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        minWidth: "90vw",
        alignItems: "flex-start",
        pt: 20,
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Work | Trendsetters</title>
      </Helmet>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", mb: 10 }}
        spacing={5}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h1"
            sx={{ textAlign: "center", fontWeight: "600" }}
          >
            Projects
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ pr: 20 }}>
            Below is a list of the projects we have done. Each type of service
            we provide is showcased as well as which of our team members was
            responsible for that project to gain a better understanding of our
            expertise.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={5} sx={{ px: 20, mb: 20 }}>
        <ProjectGridItem
          title="Carpool"
          subtitle="mobile ridesharing app"
          image="carpool_bg.png"
          link="carpool"
        />
        <ProjectGridItem
          title="UI/UX Redesign"
          subtitle="by Benjamin Osmers"
          image="ben_bg.png"
          link="benjamin"
        />
        <ProjectGridItem
          title="UI/UX Redesign"
          subtitle="by Zivan Haripershad"
          image="zivan_project.png"
          link="zivan"
        />
        <ProjectGridItem
          title="3D Robot Design"
          subtitle="by Naderah Limbada"
          image="naderah_bg.png"
          link="naderah"
        />
        <ProjectGridItem
          title="3D Robot Design"
          subtitle="by Cameron Brammer"
          image="cam_project.png"
          link="cameron"
        />
        <ProjectGridItem
          title="UI/UX Redesign"
          subtitle="by Devank Harripersad"
          image="devank_project.png"
          link="devank"
        />
        <ProjectGridItem
          title="emom"
          subtitle="ecommerce store"
          image="emom_bg.png"
          link="emom"
        />
        <ProjectGridItem
          title="Design Portfolio"
          subtitle="3D design portfolio"
          image="design_bg.png"
          link="portfolio"
        />
        <ProjectGridItem
          title="Gravelotte Eng"
          subtitle="corporate website"
          image="grav_bg.png"
          link="grav"
        />
        <ProjectGridItem
          title="Belle Ombre"
          subtitle="corporate website"
          image="belle_bg.png"
          link="belle"
        />
      </Grid>
      {/* <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Link to="/carpool" style={{ textDecoration: "none" }}>
          <Paper sx={{ borderRadius: 0, zIndex: 10 }} elevation={5}>
            <Grid container sx={{ borderLeft: 4, borderColor: "#4703A6" }}>
              <Grid item xs={6} sx={{ backgroundColor: "#EFEFEF", p: 5 }}>
                <Typography variant="h4">Carpool</Typography>
                <Typography>Mobile App Development</Typography>
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
                <img
                  src="./images/carpool.png"
                  alt="carpool"
                  style={{ width: "40%" }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Link>
      </Box> */}
    </Container>
  );
};

export default ProjectsPage;
