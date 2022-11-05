import React from "react";
import CustomSelectComponent from "./custom-select.component";

const RightSectionComponent = ({ setFormValue, formValue, handleChange }) => {
  return (
    <div className="right-section">
      <div className="sub-title">Split schedule using social distancing?</div>

      <div className="options">
        <div
          className="yes-no-btn"
          onClick={() => setFormValue({ ...formValue, socialDistance: true })}
        >
          <div
            className={`radio-btn ${
              formValue.socialDistance === true ? "active" : ""
            }`}
          ></div>
          Yes
        </div>

        <div
          className="yes-no-btn"
          onClick={() => setFormValue({ ...formValue, socialDistance: false })}
        >
          <div
            className={`radio-btn ${
              formValue.socialDistance === false ? "active" : ""
            }`}
          ></div>
          No
        </div>
      </div>

      <div className="das"></div>

      <div className="elapse-data">
        <div className="sub-title">Location Checking</div>

        <div className="elapse-data-list">All Available!</div>
      </div>

      <div className="das"></div>

      <div className="sub-title">Client:</div>

      <div className="options">
        <div
          className="yes-no-btn"
          onClick={() => setFormValue({ ...formValue, client: true })}
        >
          <div
            className={`radio-btn ${formValue.client === true ? "active" : ""}`}
          ></div>
          Single
        </div>

        <div
          className="yes-no-btn"
          onClick={() => setFormValue({ ...formValue, client: false })}
        >
          <div
            className={`radio-btn ${
              formValue.client === false ? "active" : ""
            }`}
          ></div>
          Multiple
        </div>
      </div>

      <div className="testing-list">
        <ul>
          <li>
            <div className="name">Testing Center 1</div>

            <div className="select-area">
              <CustomSelectComponent
                handleChange={handleChange}
                name="testingCenter1"
                value={formValue.testingCenter1}
              >
                <option value="">Select Client:</option>
                <option value="Hello">Hello</option>
                <option value="World">World</option>
              </CustomSelectComponent>

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
            </div>
          </li>

          <li>
            <div className="name">Testing Center 1</div>

            <div className="select-area">
              <CustomSelectComponent
                handleChange={handleChange}
                name="testingCenter2"
                value={formValue.testingCenter2}
              >
                <option value="">Select Client:</option>
                <option value="Hello">Hello</option>
                <option value="World">World</option>
              </CustomSelectComponent>

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
            </div>
          </li>

          <li>
            <div className="name">Testing Center 1</div>

            <div className="select-area">
              <CustomSelectComponent
                handleChange={handleChange}
                name="testingCenter3"
                value={formValue.testingCenter3}
              >
                <option value="">Select Client:</option>
                <option value="Hello">Hello</option>
                <option value="World">World</option>
              </CustomSelectComponent>

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
            </div>
          </li>

          <li>
            <div className="name">Testing Center 1</div>

            <div className="select-area">
              <CustomSelectComponent
                handleChange={handleChange}
                name="testingCenter4"
                value={formValue.testingCenter4}
              >
                <option value="">Select Client:</option>
                <option value="Hello">Hello</option>
                <option value="World">World</option>
              </CustomSelectComponent>

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
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSectionComponent;
