import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col md:flex-row items-center justify-between">

        {/* Branding / Copyright */}
        <p className="text-slate-500 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Manya Sharma. All rights reserved.
        </p>

        {/* Call to Action */}
        <p className="text-slate-400 text-sm text-center md:text-left">
          Open to collaboration & exciting opportunities. Let’s build something great!
        </p>

        {/* Portfolio Credit */}
        <p className="text-slate-600 text-sm text-center md:text-right">
          Designed & built with 🩷 by Manya Sharma.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
