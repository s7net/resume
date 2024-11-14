import puppeteer from "puppeteer";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Launch browser with specific settings for PDF generation
    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // Set viewport to match US Letter size (in pixels)
    await page.setViewport({
      width: 816, // 8.5 inches at 96 DPI
      height: 1056, // 11 inches at 96 DPI
      deviceScaleFactor: 2,
    });

    // Navigate to the resume page
    // In production, use full URL
    await page.goto("http://localhost:3000/resume", {
      waitUntil: "networkidle0",
    });

    // Generate PDF with specific settings
    const pdf = await page.pdf({
      format: "Letter",
      printBackground: true,
      margin: {
        top: "25mm",
        right: "25mm",
        bottom: "25mm",
        left: "25mm",
      },
      preferCSSPageSize: true,
    });

    await browser.close();

    // Return PDF as download
    return new NextResponse(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="resume.pdf"',
      },
    });
  } catch (error) {
    console.error("PDF generation failed:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
