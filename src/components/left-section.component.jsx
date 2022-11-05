import React, { useState } from "react";
import CustomButtonComponent from "./custom-button.component";
import CustomSelectComponent from "./custom-select.component";
import CustomFileDrag from "./customDragDrop.component";

const LeftSectionComponent = ({
  formValue,
  handleChange,
  importFile,
  setImportFile,
}) => {
  // toggle checking
  const [checked, setChecked] = useState(true);

  // sending toggle value to state
  const toggleFunction = (e) => {
    const switchInput = document.querySelector(".switchInput");

    if (!e) {
      switchInput.checked = false;
      formValue.toleranceWindow = false;
      setChecked(false);
    } else {
      switchInput.checked = true;
      formValue.toleranceWindow = true;
      setChecked(true);
    }
  };

  // converted bytes
  const formatBytes = (bytes, decimals = 2) => {
    if (!+bytes) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  };

  const getCitizenship = (fileData) => {
    setImportFile(fileData);
  };

  return (
    <div className="left-section">
      <CustomSelectComponent
        handleChange={handleChange}
        name="importName"
        value={formValue.importName}
      >
        <option value="">Select Import Name:</option>
        <option value="Hello">Hello</option>
        <option value="Worlds">Worlds</option>
      </CustomSelectComponent>

      <div className="das"></div>

      <div className="drag-and-drop">
        <div className="sub-title">
          Select a manifest that you'd like to import
        </div>

        <div className="drag-and-drop-area">
          <CustomFileDrag
            handleChange={(e) => setImportFile(e.target.value)}
            getData={getCitizenship}
            data={importFile}
          />
          <div>
            {/* <input
              className="browseInput"
              type="file"
              name="importFile"
              onChange={(e) => setImportFile(e.target.files[0])}
              hidden
            />
            <div className="content">
              <div className="icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 9H18.5L13 3.5V9ZM6 2H14L20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 2.89 4.89 2 6 2ZM15 18V16H6V18H15ZM18 14V12H6V14H18Z"
                    fill="#FA9D26"
                  />
                </svg>
              </div>

              <p>
                Drag & Drop Here Or <strong>Browse</strong>
              </p>
            </div> */}
          </div>

          <CustomButtonComponent>Upload Manifest</CustomButtonComponent>
        </div>
      </div>

      {importFile !== "" ? (
        <div className="uploading-file">
          <div className="icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 9H18.5L13 3.5V9ZM6 2H14L20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 2.89 4.89 2 6 2ZM15 18V16H6V18H15ZM18 14V12H6V14H18Z"
                fill="#FA9D26"
              />
            </svg>
          </div>

          <div className="file-info">
            <div className="file-name">{importFile.name}</div>
            <div className="file-size">{formatBytes(importFile.size)}</div>
          </div>
        </div>
      ) : null}

      <div className="das"></div>

      <div className="elapse-data">
        <div className="sub-title">Elapse Data Checking</div>

        <div className="elapse-data-list">No Elapsed Datas!</div>
      </div>

      <div className="das"></div>

      <div className="tolerance-window">
        <div className="sub-title">Tolerance Window:</div>

        <div className="switch">
          <input
            className="switchInput"
            type="checkbox"
            name="toleranceWindow"
            onChange={handleChange}
            value={formValue.toleranceWindow}
            hidden
          />

          <div className="switch-btn">
            <div
              className={`toggle-switch ${checked ? "active" : ""}`}
              onClick={() => toggleFunction(!checked)}
            ></div>
            Toggle {checked ? "ON" : "OFF"}
            <div className="h_das"></div>
            <div className="icon">
              <svg
                width="69"
                height="69"
                viewBox="0 0 69 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.3414 21.9703C31.0097 16.6342 40.7412 17.7143 46.0773 24.3826C51.4133 31.051 50.3333 40.7824 43.6649 46.1185C36.9966 51.4545 27.2651 50.3745 21.929 43.7062C16.593 37.0378 17.673 27.3063 24.3414 21.9703Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M41.1667 42.9516L34.0254 34.0273M33.9973 34.0084L26.3226 35.1785"
                  stroke="black"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            Select Tolerance Level
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSectionComponent;
