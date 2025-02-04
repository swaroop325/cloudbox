import React from "react";
import { TextField } from "@mui/material";
import { formatLabel } from "../utils/helper";

interface TextFieldComponentProps {
  fieldKey: string;
  value: string;
  handleInputChange: (key: string, value: string) => void;
}

const TextFieldComponent: React.FC<TextFieldComponentProps> = ({
  fieldKey,
  value,
  handleInputChange,
}) => {
  return (
    <TextField
      key={fieldKey}
      label={formatLabel(fieldKey)}
      value={value}
      onChange={(e) => handleInputChange(fieldKey, e.target.value)}
      fullWidth
      margin="dense"
    />
  );
};

export default TextFieldComponent;
