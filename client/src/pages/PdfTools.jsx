import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../svgs/Arrow";

const PdfTools = () => {
  const toolsArray = [
    {
      title: "Compress Pdf",
      desc: "Reduce the Quality of your Pdf without loosing quality",
      link: "/compress-pdf",
    },
    {
      title: "PDF Converter",
      desc: "Converter files to Pdf",
      link: "/convert-pdf",
    },
    {
      title: "Merge Pdf",
      desc: "Combine Multiple documents into one document.",
      link: "/merge-pdf",
    },
  ];
  return (
    <div className="min-h-screen py-20 md:w-3/6 mx-auto text-center">
      <h1 className="text-5xl font-bold">All .pdf Tools</h1>
      <p className="py-5 text-2xl">
        Make use of our collection of PDF tools to process digital documents and
        streamline your workflow seamlessly.
      </p>

      <div className="grid md:grid-cols-3 gap-3 mt-8 text-left p-8">
        {toolsArray.map((item) => (
          <Link to={item.link}>
            <div className="bg-light-300 min-h-full dark:bg-dark-300 px-6 py-4">
              <h3 className="flex relative">
                <span>{item.title}</span>
                <Arrow />
              </h3>
              <p className="text-sm mt-2">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
      <span>More to be added soon! :)</span>
    </div>
  );
};

export default PdfTools;
