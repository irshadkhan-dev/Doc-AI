import { cn } from "@/lib/utils";
import React from "react";

interface MenuBtnProps {
  icon: React.ComponentType;
  label: string;
  desc: string;
  isActive?: boolean;
  onClick: () => void;
}

const MenuBtn = ({
  icon: Icons,
  label,
  desc,
  isActive,
  onClick,
}: MenuBtnProps) => {
  return (
    <button
      key={label}
      className={cn(
        `flex items-center space-x-2 p-2 bg-white shadow-md rounded-md ${
          isActive && "bg-red-500"
        }`
      )}
      onClick={onClick}
    >
      <span className="rounded-lg border border-gray-300 text-xl font-semibold px-2 py-1 bg-white">
        <Icons />
      </span>
      <div className="flex flex-col text-start">
        <span className="font-semibold text-sm">{label}</span>
        <span className="text-xs text-muted-foreground">{desc}</span>
      </div>
    </button>
  );
};

export default MenuBtn;
