import React, { useState } from "react";

function CustomInput({
  id = "",
  label = "",
  type = "text",
  placeholder = label,
  required = false,
  minLength = 20,
  maxLength = 50,
  defaultValue = "",
  updateValue 
}) {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    updateValue(e.target.value);
    if(error) setError(e.target.validationMessage);
  };
  const handleFocusOut = (e) => {
    e.preventDefault();
    setError(e.target.validationMessage);
  };
  return (
    <div className="w-full p-2">
      <label
        className="block cursor-pointer text-gray-600 text-sm"
        htmlFor={id}
      >{`${label} ${required ? "*" : ""}`}</label>
      <input
        minLength={minLength}
        maxLength={maxLength}
        value={value}
        onInput={handleInput}
        onBlur={handleFocusOut}
        id={id}
        name={id}
        className="border-[2px] rounded-md w-full px-2 py-2 outline-none"
        type={type}
        placeholder={placeholder}
        required={required}
      />
      <div className="text-xs text-red-500">{error}</div>
    </div>
  );
}

export default CustomInput;
