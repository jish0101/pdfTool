import React, { useState, useEffect } from "react";
import axios from "../api/axios";

const CompressPdf = () => {
  const [files, setFiles] = useState([]);
  const MERGE_URL = "merge-pdf";

  function handleChange(e) {
    setFiles((prev) => [...prev, e.target.files[0]]);
  }

  async function getData() {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    console.log('Data sent -> ', formData);
    const res = await axios.post(MERGE_URL, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log('Res -> ', res.data);
  }

  return (
    <div className="min-h-screen px-3 py-20">
      <div className="grid text-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl font-bold">Merge PDF</h1>
          <p className="my-5 text-xl">The easiest way to combine PDF Files!</p>
        </div>
        <div className="flex flex-col justify-center items-center w-3/4 mx-auto bg-light-300 dark:bg-dark-300 rounded-2xl py-28">
          <form>
            <label className="bg-light-700 dark:bg-dark-700 cursor-pointer px-8 py-4 rounded-xl">
              <input
                type="file"
                id="__picker-input"
                multiple=""
                accept="application/pdf,.pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.docx,application/msword,.doc,application/vnd.openxmlformats-officedocument.presentationml.presentation,.pptx,application/vnd.ms-powerpoint,.ppt,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.xlsx,application/vnd.ms-excel,.xls,image/bmp,.bmp,image/jpeg,.jpg,.jpeg,image/png,.png,image/tiff,.tif,.tiff"
                className="hidden cursor-pointer"
                onChange={(e) => handleChange(e)}
              />
              CHOOSE FILES
            </label>
          </form>
          {files &&
            files.map((file, index) => (
              <div key={index} className="my-2">
                <p>{file.name}</p>
              </div>
            ))}
        </div>
        <div>
          <button
            className="filled"
            onClick={getData}
            disabled={!(files.length > 1)}
          >
            Merge →{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompressPdf;
