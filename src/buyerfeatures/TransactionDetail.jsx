import React from "react";

const TransactionDetail = () => {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "2rem",
        background: "#f3f4f6",
        borderRadius: "12px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        marginBottom: "4rem", // 👈 Keeps sticky footer safe
        textAlign: "center",  // 👈 Centers all text inside
      }}
    >
      {/* Inner White Card */}
      <div
        style={{
          background: "#ffffff",
          padding: "2rem",
          borderRadius: "10px",
          border: "1px solid #e5e7eb",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        }}
      >
        <h1
          style={{
            fontSize: "1.75rem",
            fontWeight: "700",
            color: "#1f2937",
            marginBottom: "1rem",
          }}
        >
          Transaction Detail
        </h1>
        <p style={{ color: "#6b7280", fontSize: "1.1rem" }}>
          Render specific transaction info here.
        </p>
      </div>
    </div>
  );
};

export default TransactionDetail;
// 