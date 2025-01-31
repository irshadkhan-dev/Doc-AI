"use client";
import React, { useEffect, useRef, useState } from "react";
import EditPage from "./EditPage";
import Editor from "./Editor";
import { GeneratePdf } from "@/lib/utils";
import useEditor from "@/lib/hook";
import PageContainer from "./PageContainer";

const Testpage = () => {
  const [pages, setPages] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const pageContent = localStorage.getItem("page");
      return pageContent ? JSON.parse(pageContent) : [""];
    }
    return [""];
  });

  useEffect(() => {
    if (window !== undefined) {
      localStorage.setItem("page", JSON.stringify(pages));
    }
  }, [pages]);

  const handleAddPage = () => {
    setPages((prev) => [...prev, ""]);
  };

  const hanldeUpdatePage = (html: string, index: number) => {
    const newPage = [...pages];
    newPage[index] = html;
    setPages(newPage);
  };

  const handleGeneratePdf = () => {
    const fullHtml = pages
      .map((page) => `<div class="pdf-page">${page || ""}</div>`)
      .join("");
    console.log(fullHtml);
    GeneratePdf(fullHtml);
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row overflow-hidden">
      <div className="w-full lg:w-64 flex-shrink-0 order-1 lg:order-none">
        <button className="bg-gray-200 p-3 rounded-md" onClick={handleAddPage}>
          Add page
        </button>
        <button className="bg-gray-300 p-3" onClick={handleGeneratePdf}>
          Download pdf
        </button>
      </div>
      <div className="flex-grow order-3 lg:order-none overflow-y-scroll no-scrollbar">
        {pages &&
          pages.map((content, index) => (
            <div
              className="w-full flex justify-center mt-10 flex-shrink-0"
              key={index}
            >
              <PageContainer>
                <Editor
                  content={content || ""}
                  onUpdate={(content) => hanldeUpdatePage(content, index)}
                />
              </PageContainer>
            </div>
          ))}
      </div>
      <div className="hidden lg:flex w-64 flex-shrink-0 order-2 lg:order-none"></div>
    </div>
  );
};

export default Testpage;
