import React, { HTMLInputTypeAttribute, ReactNode } from "react";
import { FieldHookConfig, useField } from "formik";

interface TextFieldProps {
  label?: string;
  name: string;
  id?: string;
  type?: HTMLInputTypeAttribute | undefined;
  placeHolder?: string;
  placeHolderColor?: string;
  startAdornment?: ReactNode | string | number | null;
  endAdornment?: ReactNode | string | number | null;
  labelStyles?: string;
  inputStyes?: string;
  className?: string;
}

const TextField = ({
  name,
  id,
  label,
  placeHolder,
  placeHolderColor,
  type,
  endAdornment,
  startAdornment,
  labelStyles,
  inputStyes,
  className,
}: TextFieldProps) => {
  // const [field, meta] = useField(prop);
  // const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <div className={className}>
      <label
        htmlFor={id || name}
        className={`text-sm font-medium text-gray-700 w-full ${
          label ? "flex" : "hidden"
        } ${labelStyles}`}
      >
        {label}
      </label>
      <div className="w-full rounded-md focus:border-gray-800 border focus:border-collapse border-gray-600 overflow-hidden">
        <>{startAdornment ? startAdornment : null}</>
        <input
          // {...field} // Spread Formik-specific field props (name, value, onChange, onBlur)
          id={id || name}
          placeholder={placeHolder || "Enter here..."}
          type={type || "text"}
          className={`flex w-full px-2 py-2 h-full ${inputStyes}`}
          // className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
          //   errorText ? "border-red-500" : "border-gray-300"
          // }`}
        />
        <>{endAdornment ? endAdornment : null}</>
      </div>
      {/* {errorText && <p className="mt-1 text-sm text-red-500">{errorText}</p>} */}
    </div>
  );
};

export default TextField;
