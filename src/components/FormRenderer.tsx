import React, { useState } from "react";
import { Button, Box, Grid2 } from "@mui/material";
import originalSchema from "../../schema.json";
import { JSONData, renderField } from "../utils/render";

const DynamicFormRenderer: React.FC = () => {
  const [formData, setFormData] = useState<JSONData>(originalSchema);

  const handleSubmit = () => {
    // const blob = new Blob([JSON.stringify(formData, null, 2)], {
    //   type: "application/json",
    // });
    // const url = URL.createObjectURL(blob);
    // const a = document.createElement("a");
    // a.href = url;
    // a.download = "formData.json";
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);
    // URL.revokeObjectURL(url);
  };
  const renderBaseItem = (baseItem) => {
    return renderField({ ...baseItem, setFormData });
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid2 direction={"column"}>
        <Grid2>
          <form>
            {originalSchema.project_base.map((baseItem) =>
              renderBaseItem(baseItem)
            )}
          </form>
        </Grid2>
        <Grid2>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: "20px" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default DynamicFormRenderer;
