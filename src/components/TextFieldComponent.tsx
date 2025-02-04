import React from "react";
import { TextField } from "@mui/material";

interface TextFieldComponentProps {
  fieldKey: string;
  value: string;
  label?: string;
  placeholder?: string;
  handleInputChange: (key: string, value: unknown) => void;
}

const TextFieldComponent: React.FC<TextFieldComponentProps> = ({
  fieldKey,
  value,
  label,
  placeholder,
  handleInputChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(fieldKey, e.target.value);
  };

  return (
    <TextField
      label={label || fieldKey}
      value={value || ""}
      onChange={handleChange}
      placeholder={placeholder}
      fullWidth
      margin="normal"
    />
  );
};

export default TextFieldComponent;
