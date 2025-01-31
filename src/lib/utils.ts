import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const GeneratePdf = async (fullHtml: string) => {
  try {
    const response = await fetch("http://localhost:3000/api/pdf", {
      method: "POST",
      headers: {
        "Content-Type": "text/html",
      },
      body: fullHtml,
    });
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = "output.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch (error) {
    console.log(error);
  }
};
