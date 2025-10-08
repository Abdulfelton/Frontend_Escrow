import React, { useState } from "react";

const CreateTransaction = () => {
  const [formData, setFormData] = useState({ recipient: "", amount: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.recipient || !formData.amount || formData.amount <= 0) {
      setMessage("Please enter a valid recipient and amount.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Simulate API call with setTimeout
      await new Promise((resolve) => setTimeout(resolve, 500));

      setMessage("Transaction submitted successfully!");
      setFormData({ recipient: "", amount: "" });
    } catch (error) {
      console.error(error);
      setMessage("Failed to submit transaction. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card" style={{ maxWidth: "600px", margin: "2rem auto", padding: "2rem", background: "#f3f4f6", borderRadius: "12px", border: "1px solid #e5e7eb", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
      <h1 style={{ fontSize: "1.75rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem", textAlign: "center" }}>
        Create Transaction
      </h1>
      <p style={{ textAlign: "center", color: "#6b7280", marginBottom: "1.5rem" }}>
        Enter recipient details and amount to start a secure transaction.
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* Recipient Field */}
        <div>
          <label
            htmlFor="recipient"
            style={{ display: "block", fontWeight: "600", marginBottom: "0.5rem", color: "#374151" }}
          >
            Recipient Wallet Address or Email *
          </label>
          <input
            type="text"
            id="recipient"
            name="recipient"
            placeholder="e.g. user@example.com or 0x..."
            value={formData.recipient}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "1rem",
              transition: "border-color 0.2s",
              background: "#ffffff", // Keep input background white for contrast
            }}
            onFocus={(e) => (e.target.style.borderColor = "#1a6fe6")}
            onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
          />
        </div>

        {/* Amount Field — Updated to ZAR */}
        <div>
          <label
            htmlFor="amount"
            style={{ display: "block", fontWeight: "600", marginBottom: "0.5rem", color: "#374151" }}
          >
            Amount (South African Rand - ZAR) *
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="0.00 ZAR"
            min="0.01"
            step="0.01"
            value={formData.amount}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "1rem",
              transition: "border-color 0.2s",
              background: "#ffffff", // Keep input background white for contrast
            }}
            onFocus={(e) => (e.target.style.borderColor = "#1a6fe6")}
            onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "0.875rem",
            backgroundColor: "#1a6fe6",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.2s",
            opacity: loading ? 0.8 : 1,
          }}
          onMouseEnter={(e) => !loading && (e.target.style.backgroundColor = "#165cba")}
          onMouseLeave={(e) => !loading && (e.target.style.backgroundColor = "#1a6fe6")}
        >
          {loading ? "Submitting..." : "Submit Transaction"}
        </button>
      </form>

      {/* Message Feedback */}
      {message && (
        <p
          style={{
            marginTop: "1.5rem",
            padding: "0.75rem",
            textAlign: "center",
            borderRadius: "8px",
            backgroundColor: message.includes("success") ? "#ecfdf5" : "#fef2f2",
            color: message.includes("success") ? "#065f46" : "#991b1b",
            border: message.includes("success") ? "1px solid #a7f3d0" : "1px solid #fecaca",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default CreateTransaction;
