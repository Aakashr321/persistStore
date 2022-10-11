import { List, ListItem, ListItemText, Tab } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { TabContext } from "@mui/lab";

const UserDetail = () => {
  const { users, loading } = useSelector((state) => state.users);
  const [value, setValue] = useState("1");

  const { id } = useParams();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const selectedUser = users.find((user, index) => {
    return id == index ? user : null;
  });

  if (selectedUser) {
    return (
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="User info tab">
              <Tab label="UserInfo" value="1" />
              <Tab label="History" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <List>
              <ListItem> First-Name : {selectedUser.firstName}</ListItem>
              <ListItem>Last-Name: {selectedUser.lastName}</ListItem>
              <ListItem>User-Email: {selectedUser.email}</ListItem>
            </List>
          </TabPanel>
          <TabPanel value="2">No history available</TabPanel>
        </TabContext>
      </Box>
    );
  } else {
    return <h3>No user Found</h3>;
  }
};

export default UserDetail;
