import React, { useState } from "react";

export const SelectForm = ({ name, items, unit, initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="select">
      <select name={name} value={value} onChange={(event) => handleOnChange(event)}>
        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      {unit}
    </div>
  );
};
