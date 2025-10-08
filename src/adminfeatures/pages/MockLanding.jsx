import React from "react";
import { useNavigate } from "react-router-dom";

const MockLanding = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(to bottom, #f0f4f8, #d9e2ec)",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Hero section */}
      <h1 style={{ fontSize: "3rem", marginBottom: "20px", color: "#102a43" }}>
        Welcome to Fintech App
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "40px", color: "#334e68" }}>
        Manage your transactions, track your spending, and get financial insights instantly.
      </p>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        <button
          onClick={() => navigate("/register")}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Sign Up
        </button>

        <button
          onClick={() => navigate("/buyer/dashboard")}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#fff",
            color: "#007bff",
            border: "2px solid #007bff",
            borderRadius: "5px",
            transition: "background 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#007bff";
            e.target.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#fff";
            e.target.style.color = "#007bff";
          }}
        >
          Login
        </button>

        <button
          onClick={() => navigate("/admin")}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#218838")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#28a745")}
        >
          Admin Dashboard
        </button>
      </div>
      
    </div>
   
    
  );
};

export default MockLanding;
