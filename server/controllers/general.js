import { createPDF, rotatePDF, pdfArrayToBlob, mergePDF } from "pdf-actions";
import fs from "fs";
// import multer from "multer";

// const filesMiddleware = multer({ dest: "data/" });

export const getMergedPDF = async (req, res) => {
  try {
    const files = req.files;

    console.log(files);
    // res.json(files)
    const pdfDocs = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // if (file.deleted) {
      //   continue;
      // }
      const pdfFile = await createPDF.PDFDocumentFromFile(file);
      let pdfToBeAdded = pdfFile;
      // if (file.degrees) {
      //   pdfToBeAdded = await rotatePDF(pdfFile, file.degrees);
      // }
      pdfDocs.push(pdfToBeAdded);
    }
    const mergedPdfFile = await (await mergePDF(pdfDocs)).save();
    console.log(mergedPdfFile);
    // const pdfBlob = pdfArrayToBlob(mergedPdfFile);

    const uploadedFiles = [];
    files.map(async (file) => {
      const { path, originalname } = file;
      const parts = originalname.split(".");
      const ext = parts[parts.length - 1];
      const newPath = path + "." + ext;
      fs.renameSync(path, newPath);
      uploadedFiles.push(newPath);
    });
    // res.json(uploadedFiles);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
