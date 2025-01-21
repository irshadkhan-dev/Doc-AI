"use client";
import React, { useState } from "react";
import MaxWidthwrapper from "./MaxWidthwrapper";
import EditPage from "./EditPage";
import Editor from "./Editor";

const Testpage = () => {
  const [page, setPages] = useState(1);
  return (
    <div className="h-screen flex flex-col lg:flex-row overflow-hidden">
      <div className="w-full lg:w-64 flex-shrink-0 order-1 lg:order-none">
        <button onClick={() => setPages(page + 1)}>Add page</button>
      </div>
      <div className="flex-grow order-3 lg:order-none overflow-y-scroll no-scrollbar">
        {Array(page)
          .fill(null)
          .map((_, i) => (
            <div
              className="w-full flex justify-center mt-10 flex-shrink-0"
              key={i}
            >
              <EditPage>
                <Editor />
              </EditPage>
            </div>
          ))}
      </div>
      <div className="hidden lg:flex w-64 flex-shrink-0 order-2 lg:order-none"></div>
    </div>
  );
};

export default Testpage;
