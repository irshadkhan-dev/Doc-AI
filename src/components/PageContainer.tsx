import React from "react";

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[210mm] min-h-[297mm] p-[10mm] bg-white shadow-lg break-after-page rounded-sm">
      {children}
    </div>
  );
};

export default PageContainer;
