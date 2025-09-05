import React from "react";
import homeImg from "../assets/home.svg"; // adjust path if needed
import { Link,useNavigate } from "react-router-dom";
const Home = () => {
    const navigate=useNavigate();
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "350px",
  };

  const imageStyle = {
    width: "120px",
    marginBottom: "20px",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  };

  const descriptionStyle = {
    fontSize: "16px",
    marginBottom: "30px",
    color: "#555",
  };

  const buttonStyle = {
    padding: "12px 24px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <img src={homeImg} alt="QuizMaster logo" style={imageStyle} />
        <h1 style={titleStyle}>Welcome to QuizMaster</h1>
        <p style={descriptionStyle}>
          Test your knowledge across multiple topics and see how high you can score!
        </p>
        <button
          style={buttonStyle}
          onClick={()=>navigate("/Quiz")}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
