import React, { useState } from "react";
import { AppBar, Tabs, Tab, Box } from "@mui/material";
import Home from "../pages";

const TabPanel: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={tabIndex}
          onChange={(e, newIndex) => setTabIndex(newIndex)}
        >
          <Tab label="Home" />
        </Tabs>
      </AppBar>
      <Box sx={{ p: 3 }}>{tabIndex === 0 && <Home />}</Box>
    </Box>
  );
};

export default TabPanel;
