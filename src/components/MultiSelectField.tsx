import { MenuItem, Select, InputLabel, FormControl, Chip } from "@mui/material";
import React from "react";
import { formatLabel } from "../utils/helper";

interface MultiSelectFieldProps {
  fieldKey: string;
  value: string[];
  options: string[];
  handleInputChange: (key: string, newValue: string[]) => void;
}

const MultiSelectField: React.FC<MultiSelectFieldProps> = ({
  fieldKey,
  value,
  options,
  handleInputChange,
}) => {
  return (
    <FormControl fullWidth margin="dense">
      <InputLabel>{formatLabel(fieldKey)}</InputLabel>
      <Select
        multiple
        value={value}
        onChange={(e) =>
          handleInputChange(fieldKey, e.target.value as string[])
        }
        renderValue={(selected) => (
          <div>
            {selected.map((item) => (
              <Chip key={item} label={item} style={{ margin: 2 }} />
            ))}
          </div>
        )}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultiSelectField;
