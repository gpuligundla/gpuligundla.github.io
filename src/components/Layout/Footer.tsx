import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="px-4 md:px-24 py-8 text-[#969696]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-5xl mx-auto">
        <span className="text-sm text-center md:text-left">
          © 2025  GK. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
