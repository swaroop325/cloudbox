import {
    Button,
    Card,
    CardContent,
    IconButton,
    Typography,
  } from "@mui/material";
  import { Add, Delete } from "@mui/icons-material";
  import React, { useState } from "react";
  import ObjectField from "./ObjectField";
  import { formatLabel } from "../utils/helper";
  
  interface ArrayObjectFieldProps {
    fieldKey: string;
    value: Record<string, any>[];
    handleInputChange: (key: string, newValue: Record<string, any>[]) => void;
  }
  
  const ArrayObjectField: React.FC<ArrayObjectFieldProps> = ({
    fieldKey,
    value,
    handleInputChange,
  }) => {
    const [tempItems, setTempItems] = useState(value);
  
    const handleAddItem = () => {
      setTempItems([...tempItems, {}]);
    };
  
    const handleUpdateItem = (index: number, newItem: Record<string, any>) => {
      const updatedItems = [...tempItems];
      updatedItems[index] = newItem;
      setTempItems(updatedItems);
      handleInputChange(fieldKey, updatedItems);
    };
  
    const handleRemoveItem = (index: number) => {
      const updatedItems = tempItems.filter((_, i) => i !== index);
      setTempItems(updatedItems);
      handleInputChange(fieldKey, updatedItems);
    };
  
    return (
      <div>
        <Typography variant="h6">{formatLabel(fieldKey)}</Typography>
        {tempItems.map((item, index) => (
          <Card key={index} style={{ margin: "10px 0" }}>
            <CardContent>
              <Typography variant="body1">Item {index + 1}</Typography>
              <ObjectField
                fieldKey={`${fieldKey}[${index}]`}
                value={item}
                handleInputChange={(key, newValue) =>
                  handleUpdateItem(index, newValue)
                }
              />
              <IconButton onClick={() => handleRemoveItem(index)}>
                <Delete />
              </IconButton>
            </CardContent>
          </Card>
        ))}
        <Button startIcon={<Add />} onClick={handleAddItem}>
          Add Item
        </Button>
      </div>
    );
  };
  
  export default ArrayObjectField;
  