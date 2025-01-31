import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer-core";

export const POST = async (req: NextRequest) => {
  const fullHtml = await req.text();

  if (!fullHtml) return new Error("not valid html");
  console.log(fullHtml);
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: true,
    channel: "chrome", // Use system-installed Chrome
  });

  const page = await browser.newPage();
  await page.setContent(
    `<style>
      @media print {
     .pdf-page {
       page-break-after: always;
       width: 210mm;
       height: 297mm;
       }
     }</style> ${fullHtml}`,
    { waitUntil: "networkidle0" }
  );

  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: {
      top: "20mm",
      right: "20mm",
      bottom: "20mm",
      left: "20mm",
    },
  });
  await browser.close();

  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=output.pdf",
    },
  });
};
