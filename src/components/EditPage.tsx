import React from "react";

const EditPage = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="bg-white shadow-xl rounded-sm w-[8.5in] h-[11.5in] scale-[0.99] origin-center py-10 px-8">
      {children}
    </div>
  );
};

export default EditPage;
