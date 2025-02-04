import React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";

interface BooleanComponentFieldProps {
  fieldKey: string;
  value: boolean;
  handleInputChange: (key: string, value: unknown) => void;
}

const BooleanComponentField: React.FC<BooleanComponentFieldProps> = ({
  fieldKey,
  value,
  handleInputChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(fieldKey, e.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={value || false}
          onChange={handleChange}
          color="primary"
        />
      }
      label={fieldKey}
    />
  );
};

export default BooleanComponentField;
