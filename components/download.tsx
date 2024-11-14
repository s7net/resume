"use client";

import { jsPDF } from "jspdf";
import { toast } from "sonner";
import { intro, work, education, projects, openSource } from "@/lib/content";

export function DownloadPDF() {
  const generatePDF = async () => {
    let loadingToastId: string | number = "";

    try {
      loadingToastId = toast.loading("Generating PDF...", {
        duration: Infinity,
      });

      // Create PDF with Helvetica font for Swiss design aesthetic
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "letter",
        compress: true,
      });

      // Define grid system (in mm)
      const page = {
        width: 215.9,
        height: 279.4,
        margin: {
          top: 25,
          right: 25,
          bottom: 25,
          left: 25,
        },
        grid: {
          columns: 12,
          gutter: 4,
        },
      };

      // Calculate column width
      const contentWidth = page.width - (page.margin.left + page.margin.right);
      const columnWidth =
        (contentWidth - (page.grid.columns - 1) * page.grid.gutter) /
        page.grid.columns;

      // Track position
      let yPos = page.margin.top;

      // Helper function to calculate x position based on column number (0-based)
      const getXPos = (column: number) => {
        return page.margin.left + (columnWidth + page.grid.gutter) * column;
      };

      // Helper function for page breaks
      const checkPageBreak = (requiredSpace: number) => {
        if (yPos + requiredSpace > page.height - page.margin.bottom) {
          pdf.addPage();
          yPos = page.margin.top;
          return true;
        }
        return false;
      };

      // Helper for text alignment
      const addText = (
        text: string,
        fontSize: number,
        {
          bold = false,
          column = 0,
          columnSpan = 12,
          align = "left",
          spacing = 0,
        } = {}
      ) => {
        if (!text) return;

        pdf.setFontSize(fontSize);
        pdf.setFont("helvetica", bold ? "bold" : "normal");

        const maxWidth =
          columnSpan * columnWidth + (columnSpan - 1) * page.grid.gutter;
        const lines = pdf.splitTextToSize(text, maxWidth);

        lines.forEach((line: string) => {
          checkPageBreak(fontSize / 2);

          let xPos = getXPos(column);
          if (align === "center") {
            const textWidth = pdf.getTextWidth(line);
            xPos = getXPos(column) + (maxWidth - textWidth) / 2;
          }

          pdf.text(line, xPos, yPos);
          yPos += fontSize / 2 + spacing;
        });
      };

      // Add divider line
      const addDivider = (column = 0, columnSpan = 12) => {
        const x1 = getXPos(column);
        const x2 =
          getXPos(column) +
          columnSpan * columnWidth +
          (columnSpan - 1) * page.grid.gutter;
        pdf.setLineWidth(0.1);
        pdf.line(x1, yPos, x2, yPos);
        yPos += 4;
      };

      // Header
      addText(intro.name, 24, { bold: true, spacing: 2 });
      yPos += 4;
      addText(intro.about, 10, { columnSpan: 8, spacing: 1 });
      yPos += 8;

      // Contact info in a grid
      const contactItems = [
        { label: "Email", value: intro.email },
        { label: "Portfolio", value: intro.href },
        { label: "GitHub", value: intro.github },
        { label: "LinkedIn", value: intro.linkedin },
      ];

      contactItems.forEach((item, index) => {
        const column = index * 3;
        addText(item.label.toUpperCase(), 7, {
          column,
          columnSpan: 3,
          bold: true,
        });
        addText(item.value, 8, { column, columnSpan: 3 });
      });

      yPos += 12;
      addDivider();

      // Work Experience
      addText("WORK EXPERIENCE", 12, { bold: true });
      yPos += 8;

      work.forEach((item, index) => {
        if (index > 0) yPos += 4;
        checkPageBreak(40);

        // Title and date in a grid
        addText(item.title, 10, { bold: true, columnSpan: 8 });
        addText(item.date || "", 9, {
          column: 8,
          columnSpan: 4,
          align: "left",
        });
        addText(item.location || "", 9, { columnSpan: 8 });
        yPos += 4;

        item.description.forEach((desc) => {
          addText(`• ${desc}`, 9, { columnSpan: 11, spacing: 1 });
        });
      });

      yPos += 12;
      addDivider();

      // Education
      addText("EDUCATION", 12, { bold: true });
      yPos += 8;

      education.forEach((item, index) => {
        if (index > 0) yPos += 4;
        checkPageBreak(30);

        addText(item.title, 10, { bold: true, columnSpan: 8 });
        addText(item.date || "", 9, {
          column: 8,
          columnSpan: 4,
          align: "left",
        });
        addText(item.location || "", 9, { columnSpan: 8 });
        yPos += 4;

        item.description.forEach((desc) => {
          addText(`• ${desc}`, 9, { columnSpan: 11, spacing: 1 });
        });
      });

      yPos += 12;
      addDivider();

      // Projects
      addText("PROJECTS", 12, { bold: true });
      yPos += 8;

      projects.forEach((item, index) => {
        if (index > 0) yPos += 4;
        checkPageBreak(30);

        addText(item.title, 10, { bold: true, columnSpan: 8 });
        yPos += 4;

        item.description.forEach((desc) => {
          addText(`• ${desc}`, 9, { columnSpan: 11, spacing: 1 });
        });
      });

      yPos += 12;
      addDivider();

      // Open Source
      addText("OPEN SOURCE", 12, { bold: true });
      yPos += 8;

      openSource.forEach((item, index) => {
        if (index > 0) yPos += 4;
        checkPageBreak(30);

        addText(item.title, 10, { bold: true, columnSpan: 8 });
        yPos += 4;

        item.description.forEach((desc) => {
          addText(`• ${desc}`, 9, { columnSpan: 11, spacing: 1 });
        });
      });

      // Save PDF
      pdf.save("resume.pdf");

      toast.dismiss(loadingToastId);
      toast.success("PDF downloaded successfully!");
    } catch (error) {
      console.error("Error generating PDF:", error);
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
