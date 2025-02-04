import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import React from "react";

type CheckboxGroupFieldProps = {
  fieldKey: string;
  label: string;
  options: string[];
  value: string[];
  handleInputChange: (key: string, value: string[]) => void;
};

const CheckboxGroupField: React.FC<CheckboxGroupFieldProps> = ({
  fieldKey,
  label,
  options,
  value,
  handleInputChange,
}) => {
  const handleChange = (option: string) => {
    const newValue = value.includes(option)
      ? value.filter((item) => item !== option)
      : [...value, option];

    handleInputChange(fieldKey, newValue);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup>
        {options.map((option) => (
          <FormControlLabel
            key={option}
            control={
              <Checkbox
                checked={value.includes(option)}
                onChange={() => handleChange(option)}
              />
            }
            label={option}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxGroupField;
