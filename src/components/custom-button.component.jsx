import React from "react";

const CustomButtonComponent = ({ type, children }) => {
  //type takes pri or sec

  return (
    <div className="custom-button">
      <button className={`${type}-btn`}>{children}</button>
    </div>
  );
};

export default CustomButtonComponent;
