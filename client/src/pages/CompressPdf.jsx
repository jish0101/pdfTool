import React, { useEffect, useState } from "react";
import Check from "../svgs/Check";

const CompressPdf = () => {
  const [files, setFiles] = useState([]);

  function handleChange(e) {
    setFiles((prev) => [...prev, e.target.files[0]])
  }

  return (
    <div className="min-h-screen px-3">
      <div className="grid md:grid-cols-2 md:p-24 py-20 md:text-start gap-12">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl font-bold text-center md:text-start">Compress PDF</h1>
          <p className="my-5 text-xl text-center md:text-start">
            Reduce the size of your PDFs online easily with our free PDF
            compressor. Our PDF tools are here to help you get things
            done—better, faster, smarter.
          </p>
          <p className="flex gap-3">
            <span>
              <Check />
            </span>
            Reduce file size up to 99%
          </p>
          <p className="flex gap-3">
            <span>
              <Check />
            </span>
            GDPR compliant and ISO/IEC 27001 certified
          </p>
          <p className="flex gap-3">
            <span>
              <Check />
            </span>
            TLS encryption for secure document processing
          </p>
        </div>
        <div className="flex flex-col text-center justify-center items-center bg-light-300 dark:bg-dark-300 rounded-2xl py-28">
          <label className="bg-light-700 dark:bg-dark-700 cursor-pointer px-8 py-4 rounded-xl">
            <input
              type="file"
              id="picker-input"
              multiple
              accept="application/pdf,.pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.docx,application/msword,.doc,application/vnd.openxmlformats-officedocument.presentationml.presentation,.pptx,application/vnd.ms-powerpoint,.ppt,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.xlsx,application/vnd.ms-excel,.xls,image/bmp,.bmp,image/jpeg,.jpg,.jpeg,image/png,.png,image/tiff,.tif,.tiff"
              className="hidden cursor-pointer"
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
