"use client";

import { toast } from "sonner";

interface CopyProps {
  children: React.ReactNode;
  text: string;
}

export const Copy: React.FC<CopyProps> = ({ children, text }) => {
  const handleClick = () => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <button className="link" onClick={handleClick}>
      {children}
    </button>
  );
};
