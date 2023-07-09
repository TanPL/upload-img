import React, { useState } from "react";
import addImg from "./addImg.png";
import { Button } from "reactstrap";

function App() {
  const [file, setFile] = useState(localStorage.getItem("uploadedImage"));
  const [activeTab, setActiveTab] = useState("input");

  const categoryList = ["Collectibles", "Accessories", "T-shirt"];

  function handleChange(e) {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const image = reader.result;
      setFile(image);
      localStorage.setItem("uploadedImage", image);
    };

    reader.readAsDataURL(selectedFile);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12 fixed-top left-panel ">
          <div className="tab">
            <div
              className={`nav-link ${activeTab === "input" ? "active" : ""}`}
              onClick={() => setActiveTab("input")}
            >
              Image Gallery
            </div>

            <div
              className={`nav-link ${activeTab === "preview" ? "active" : ""}`}
              onClick={() => setActiveTab("preview")}
            >
              Preview
            </div>
          </div>
          <div className="tab-content d-flex flex-fill">
            {activeTab === "input" ? (
              <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                <label htmlFor="imageUpload" className="image-upload">
                  <img className="img-center" src={addImg} />

                  <input
                    type="file"
                    id="imageUpload"
                    onChange={handleChange}
                    style={{ display: "none" }}
                  />
                </label>
              </div>
            ) : (
              <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                {file && (
                  <img width="100%" height="100%" src={file} alt="Preview" />
                )}
                {!file && <p>No image selected.</p>}
              </div>
            )}
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-6 right-panel"></div>
      </div>
    </div>
  );
}

export default App;
