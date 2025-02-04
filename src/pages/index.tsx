import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import DynamicFormRenderer from "../components/FormRenderer";

export default function HomePage() {
  return (
    <Box>
      <Typography>Welcome to CloudBox</Typography>
      <DynamicFormRenderer/>
    </Box>
  );
}
