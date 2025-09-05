import { Link } from "react-router-dom";

const NavBar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "15px",
    backgroundColor: "#4CAF50",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  };

  const hoverStyle = {
    color: "#e0e0e0",
  };

  return (
    <nav style={navStyle}>
      <Link
        to="/"
        style={linkStyle}
        onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
        onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
      >
        Home
      </Link>
      <Link
        to="/Quiz"
        style={linkStyle}
        onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
        onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
      >
        Quiz
      </Link>
      <Link
        to="/About"
        style={linkStyle}
        onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
        onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
      >
        About
      </Link>
      <Link
        to="/Contact"
        style={linkStyle}
        onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
        onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
      >
        Contact Us
      </Link>
      
    </nav>
  );
};

export default NavBar;
