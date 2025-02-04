import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { formatLabel } from "../utils/helper";

interface BooleanFieldProps {
  fieldKey: string;
  value: boolean;
  handleInputChange: (key: string, value: unknown) => void;
}

const BooleanFieldComponent: React.FC<BooleanFieldProps> = ({
  fieldKey,
  value,
  handleInputChange,
}) => {
  return (
    <FormControlLabel
      key={fieldKey}
      control={
        <Checkbox
          checked={value}
          onChange={(e) => handleInputChange(fieldKey, e.target.checked)}
        />
      }
      label={formatLabel(fieldKey)}
    />
  );
};

export default BooleanFieldComponent;
