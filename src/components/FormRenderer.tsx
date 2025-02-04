import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import { formatLabel } from "../utils/helper";
import * as jsonData from "../../schema.json";
import BooleanFieldComponent from "./BooleanFieldComponent";
import TextFieldComponent from "./TextFieldComponent";
import MultiSelectField from "./MultiSelectField";
import ObjectField from "./ObjectField";
import ArrayObjectField from "./ArrayObjectField";

interface JSONData {
  [key: string]: any;
}

const DynamicFormRenderer: React.FC = () => {
  const [formData, setFormData] = useState<JSONData>({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentObjectKey, setCurrentObjectKey] = useState<string>("");
  const [currentObject, setCurrentObject] = useState<JSONData>({});

  const handleInputChange = (key: string, value: unknown) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleOpenDialog = (key: string, value: JSONData) => {
    setCurrentObjectKey(key);
    setCurrentObject(value || {});
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleSaveObject = () => {
    handleInputChange(currentObjectKey, currentObject);
    setDialogOpen(false);
  };

  const handleSubmit = () => {
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

  const renderField = (key: string, value: any): React.ReactNode => {
    if (Array.isArray(value)) {
      if (typeof value[0] === "string") {
        return (
          <MultiSelectField
            key={key}
            fieldKey={key}
            value={value}
            options={value} // Replace this with actual options
            handleInputChange={handleInputChange}
          />
        );
      }
      return (
        <ArrayObjectField
          key={key}
          fieldKey={key}
          value={value}
          handleInputChange={handleInputChange}
        />
      );
    }

    if (typeof value === "object" && value !== null) {
      return (
        <ObjectField
          key={key}
          fieldKey={key}
          value={value}
          handleInputChange={handleInputChange}
        />
      );
    }

    if (typeof value === "boolean") {
      return (
        <BooleanFieldComponent
          key={key}
          fieldKey={key}
          value={value}
          handleInputChange={handleInputChange}
        />
      );
    }

    return (
      <TextFieldComponent
        key={key}
        fieldKey={key}
        value={value}
        handleInputChange={handleInputChange}
      />
    );
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <form>
        {Object.keys(jsonData).map((key) =>
          renderField(key, formData[key] || "")
        )}
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: "20px" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>

      {/* Dialog for Object Editing */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Edit {formatLabel(currentObjectKey)}</DialogTitle>
        <DialogContent>
          {Object.keys(currentObject).map((key) =>
            renderField(key, currentObject[key])
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveObject} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DynamicFormRenderer;
