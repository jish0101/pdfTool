import React, { useState, useEffect } from "react";

const CompressPdf = () => {
  const [files, setFiles] = useState([]);

  function handleChange(e) {
    setFiles((prev) => [...prev, e.target.files[0]])
  }

  return (
    <div className="min-h-screen px-3 py-20">
      <div className="grid text-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl font-bold">Merge PDF</h1>
          <p className="my-5 text-xl">The easiest way to combine PDF Files!</p>
        </div>
        <div className="flex flex-col justify-center items-center w-3/4 mx-auto bg-light-300 dark:bg-dark-300 rounded-2xl py-28">
          <label className="bg-light-700 dark:bg-dark-700 cursor-pointer px-8 py-4 rounded-xl">
            <input
              type="file"
              id="__picker-input"
              multiple=""
              accept="application/pdf,.pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.docx,application/msword,.doc,application/vnd.openxmlformats-officedocument.presentationml.presentation,.pptx,application/vnd.ms-powerpoint,.ppt,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.xlsx,application/vnd.ms-excel,.xls,image/bmp,.bmp,image/jpeg,.jpg,.jpeg,image/png,.png,image/tiff,.tif,.tiff"
              class="hidden cursor-pointer"
              onChange={(e) => handleChange(e)}
            />
            CHOOSE FILES
          </label>
          {files && files.map((file, index) => (
            <div key={index} className="my-2">
              <p>{file.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompressPdf;
