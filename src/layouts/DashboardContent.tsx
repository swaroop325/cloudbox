import React from "react";
import { Box } from "@mui/material";
import TabPanel from "../components/TabPanel";

const DashboardContent: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <TabPanel />
      </Box>
    </Box>
  );
};

export default DashboardContent;
