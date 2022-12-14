import React from "react";
import CustomButtonComponent from "../components/custom-button.component";
import LeftSectionComponent from "../components/left-section.component";
import RightSectionComponent from "../components/right-section.component";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="popup">
        <div className="inner-details">
          <div className="close-button">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4L14.6 16L8 22.6L9.4 24L16 17.4L22.6 24L24 22.6L17.4 16L24 9.4Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="title-sec">
            <h3 className="title">Document Upload</h3>
          </div>

          <div className="sections">
            <LeftSectionComponent />

            <RightSectionComponent />
          </div>

          <div className="footer">
            <div className="note">
              Data in the import is correct. Please press Continue to import
            </div>

            <div className="btn-group">
              <CustomButtonComponent type="pri">
                Continue Import
              </CustomButtonComponent>

              <CustomButtonComponent type="sec">Cancel</CustomButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
