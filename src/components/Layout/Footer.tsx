import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="px-4 md:px-24 py-8 text-[#969696] w-full">
      <div className="flex flex-col md:flex-row justify-end items-end gap-2 w-full">
        <span className="text-sm text-right">
          © 2025 GK. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
