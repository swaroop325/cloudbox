import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
  } from "@mui/material";
  import React, { useState } from "react";
  import { formatLabel } from "../utils/helper";
  
  interface ObjectFieldProps {
    fieldKey: string;
    value: Record<string, any>;
    handleInputChange: (key: string, newValue: Record<string, any>) => void;
  }
  
  const ObjectField: React.FC<ObjectFieldProps> = ({
    fieldKey,
    value,
    handleInputChange,
  }) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [tempValue, setTempValue] = useState(value);
  
    const handleSave = () => {
      handleInputChange(fieldKey, tempValue);
      setDialogOpen(false);
    };
  
    return (
      <>
        <Button variant="outlined" onClick={() => setDialogOpen(true)}>
          Edit {formatLabel(fieldKey)}
        </Button>
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} fullWidth>
          <DialogTitle>Edit {formatLabel(fieldKey)}</DialogTitle>
          <DialogContent>
            {Object.keys(tempValue).map((key) => (
              <TextField
                key={key}
                label={formatLabel(key)}
                value={tempValue[key]}
                onChange={(e) =>
                  setTempValue((prev) => ({ ...prev, [key]: e.target.value }))
                }
                fullWidth
                margin="dense"
              />
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };
  
  export default ObjectField;
  