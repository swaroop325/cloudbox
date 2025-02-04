import React from "react";
import TextFieldComponent from "../components/TextFieldComponent";
import BooleanFieldComponent from "../components/BooleanFieldComponent";
import CheckboxGroupField from "../components/CheckboxField";

export interface JSONData {
  [key: string]: any;
}

export type RenderFieldProps = {
  label: any;
  name: string;
  type: string;
  options: string[];
  placeholder?: string;
  value: string | boolean | number | string[];
  setFormData: React.Dispatch<React.SetStateAction<JSONData>>;
};
export const renderField = (props: RenderFieldProps): React.ReactNode => {
  const { label, type, options, name, value, placeholder, setFormData } = props;
  const handleInputChange = (key: string, value: unknown) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: { ...prevData[key], value: value },
    }));
  };
  if (type === "text") {
    return (
      <TextFieldComponent
        key={name}
        label={label}
        fieldKey={name}
        placeholder={placeholder}
        value={value as string}
        handleInputChange={handleInputChange}
      />
    );
  }

  if (type === "boolean") {
    return (
      <BooleanFieldComponent
        key={name}
        fieldKey={name}
        value={value as boolean}
        handleInputChange={handleInputChange}
      />
    );
  }

  if (type === "checkbox") {
    return (
      <CheckboxGroupField
        key={name}
        fieldKey={name}
        label={label}
        options={options}
        value={value as string[]}
        handleInputChange={handleInputChange}
      />
    );
  }

  if (type === "array-group" || type === "array") {
    // if (fieldItems?.type === "string") {
    //   return (
    //     <MultiSelectField
    //     key={name}
    //     fieldKey={name}
    //     options={options}
    //     value={value as unknown as string[]}
    //       handleInputChange={handleInputChange}
    //     />
    //   );
    // }
    // if (fieldItems?.type === "object") {
    //   return (
    //     <ArrayObjectField
    //       key={key}
    //       fieldKey={key}
    //       value={value}
    //       setFormData
    //       items={fieldProperties}
    //       handleInputChange={handleInputChange}
    //     />
    //   );
    // }
  }

  //   if (fieldType === "nested-group") {
  //     return (
  //       <ObjectField
  //         key={key}
  //         fieldKey={key}
  //         value={value}
  //         setFormData
  //         fields={field?.fields}
  //         handleInputChange={handleInputChange}
  //       />
  //     );
  //   }

  return null;
};
