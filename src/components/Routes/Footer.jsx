import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
    marginTop: "auto",
    fontSize: "14px",
  };

  return (
    <footer style={footerStyle}>
      &copy; {new Date().getFullYear()} QuizMaster. All rights reserved.
    </footer>
  );
};

export default Footer;
