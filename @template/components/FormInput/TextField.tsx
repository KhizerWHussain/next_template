import React from "react";
import { FieldHookConfig, useField } from "formik";

const TextField = (prop: any) => {
  const [field, meta] = useField(prop);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <div className="mb-4" key={prop.id || null}>
      <label
        htmlFor={prop.id || prop.name}
        className="block text-sm font-medium text-gray-700"
      >
        {prop.label}
      </label>
      <input
        {...field} // Spread Formik-specific field props (name, value, onChange, onBlur)
        id={prop.id || prop.name}
        placeholder={prop.placeholder || "Enter here..."}
        type={prop.type || "text"}
        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
          errorText ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errorText && <p className="mt-1 text-sm text-red-500">{errorText}</p>}
    </div>
  );
};

export default TextField;
