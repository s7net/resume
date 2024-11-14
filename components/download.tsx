"use client";

import { toast } from "sonner";

export function DownloadPDF() {
  const generatePDF = async () => {
    const loadingToastId = toast.loading("Generating PDF...");

    try {
      const response = await fetch("/api/generate-pdf");

      if (!response.ok) throw new Error("Failed to generate PDF");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Create link and trigger download
      const link = document.createElement("a");
      link.href = url;
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.dismiss(loadingToastId);
      toast.success("PDF downloaded successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.dismiss(loadingToastId);
      toast.error("Failed to generate PDF. Please try again.");
    }
  };

  return (
    <button
      onClick={generatePDF}
      className="link"
      aria-label="Download resume as PDF"
    >
      Download
    </button>
  );
}
