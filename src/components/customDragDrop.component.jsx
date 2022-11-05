import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const CustomFileDrag = ({ getData, data }) => {
  const [files, setFiles] = useState([]);

  // getting file value
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  // file date to preview
  let images =
    !data || files[0] !== undefined ? (
      files.map((file) => (
        <div key={file.name}>
          <div>
            <img src={file.preview} className="upload-image" alt="preview" />
          </div>
          {getData(file)}
        </div>
      ))
    ) : data !== undefined ? (
      <div key={data}>
        <div>
          <img src={data} className="upload-image" alt="preview" />
        </div>
      </div>
    ) : null;

  return (
    <div className="file-drag">
      <div className="drop-area" {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="image-view-area">{images}</div>

        {images[0] === undefined ? (
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
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CustomFileDrag;
