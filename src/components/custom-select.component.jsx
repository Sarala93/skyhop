import React from "react";

const CustomSelectComponent = ({ handleChange, children, ...otherProps }) => {
  return (
    <div className="form-select">
      <select onChange={handleChange} {...otherProps}>
        {children}
      </select>
    </div>
  );
};

export default CustomSelectComponent;
