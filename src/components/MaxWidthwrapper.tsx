import { cn } from "@/lib/utils";
import React from "react";

const MaxWidthwrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={cn("w-full  mx-auto")}>{children}</div>;
};

export default MaxWidthwrapper;
