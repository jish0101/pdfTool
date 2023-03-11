import { createPDF, mergePDF } from "pdf-actions";
import fs from "fs";
import getArrayBuffer from './getArrayBuffer.js';
// import multer from "multer";

// const filesMiddleware = multer({ dest: "data/" });

export const getMergedPDF = async (req, res) => {
  try {
    const files = req.files;
    const uploadedFiles = [];
    files.map(async (file) => {
      const { path, originalname } = file;
      const parts = originalname.split(".");
      const ext = parts[parts.length - 1];
      const newPath = path + "." + ext;
      fs.renameSync(path, newPath);
      uploadedFiles.push(newPath);
    });

    const buffers = getArrayBuffer(uploadedFiles);

    const PDFDocs = buffers.map(async (buffer) => {
      return await createPDF.PDFDocumentFromPDFArray(buffer);
    })

    const mergedPdf = mergePDF(PDFDocs);

    console.log(mergePDF);

    // res.json(uploadedFiles);



  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
