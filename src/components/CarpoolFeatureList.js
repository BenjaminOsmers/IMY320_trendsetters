import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

const CarpoolFeatureList = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={6}>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Real Time Chat Functionality"
              secondary={
                <React.Fragment>
                  <Typography>
                    Carpool offers real time chat for users to communicate with
                    each other.
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Google Maps Integration"
              secondary={
                <React.Fragment>
                  <Typography>
                    Integrated maps shows routes for driver and passengers, as
                    well as pickup points of passengers.
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={6}>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start" sx={{ py: 2 }}>
            <ListItemText
              primary="Secure Integrated Payments"
              secondary={
                <React.Fragment>
                  <Typography>
                    Payments are integrated by making use of PayFast.
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Trip Suggestions"
              secondary={
                <React.Fragment>
                  <Typography>
                    Trip suggestions are made by using a regression machine
                    learning model.
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default CarpoolFeatureList;
