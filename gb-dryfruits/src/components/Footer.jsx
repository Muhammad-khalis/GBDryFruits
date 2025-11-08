import React from "react";

function Footer() {
  return (
    <footer className="bg-green-700 text-white text-center py-6 mt-12">
      <p>
        © {new Date().getFullYear()} GB Dry Fruits. All rights reserved. <br />
        Crafted with ❤️ in Gilgit Baltistan.
      </p>
    </footer>
  );
}

export default Footer;
