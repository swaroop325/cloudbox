import React, { FormEvent } from "react";
import { Box, Grid2 } from "@mui/material";
import originalSchema from "../../schema.json";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import { IChangeEvent } from "@rjsf/core";

const DynamicFormRenderer: React.FC = () => {
  const handleSubmit = (
    data: IChangeEvent<any, any, any>,
    event: FormEvent<any>
  ) => {
    const { formData } = data;
    const blob = new Blob([JSON.stringify(formData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "formData.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid2>
        <Form
          schema={originalSchema}
          validator={validator}
          onSubmit={handleSubmit}
        />
      </Grid2>
    </Box>
  );
};

export default DynamicFormRenderer;
