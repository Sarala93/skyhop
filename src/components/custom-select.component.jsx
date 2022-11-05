import React from "react";

const CustomSelectComponent = ({ children }) => {
  return (
    <div className="form-select">
      <select name="" id="">
        {children}
      </select>
    </div>
  );
};

export default CustomSelectComponent;
