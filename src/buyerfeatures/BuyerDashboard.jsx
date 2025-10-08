import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BuyerDashboard = () => {
  const [buyer, setBuyer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBuyerData = async () => {
      const data = {
        id: 1,
        name: "Cwayita Ngcwayi",
        walletBalance: 91250.75,
        pendingTransactions: 3,
        completedTransactions: 12,
        recentTransactions: [
          { id: 1, recipient: "Alice", amount: 200, status: "Completed" },
          { id: 2, recipient: "Bob", amount: 450, status: "Pending" },
          { id: 3, recipient: "Charlie", amount: 150, status: "Disputed" },
        ],
      };
      setTimeout(() => setBuyer(data), 500);
    };
    fetchBuyerData();
  }, []);

  if (!buyer) {
    return <p>Loading buyer data...</p>;
  }

  // ✅ Format amount as South African Rand (ZAR)
  const formatZAR = (amount) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const handleTransactionClick = (txId) => {
    navigate(`/buyer/transaction/${txId}`);
  };

  return (
    <div>
      <h1 style={{ marginBottom: "1rem" }}>
        Welcome, {buyer.name}
      </h1>

      {/* Summary Cards */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "200px", padding: "1rem", background: "white", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <h3>Wallet Balance</h3>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            {formatZAR(buyer.walletBalance)}
          </p>
        </div>

        <div style={{ flex: 1, minWidth: "200px", padding: "1rem", background: "white", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <h3>Pending Transactions</h3>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            {buyer.pendingTransactions}
          </p>
        </div>

        <div style={{ flex: 1, minWidth: "200px", padding: "1rem", background: "white", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <h3>Completed Transactions</h3>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            {buyer.completedTransactions}
          </p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div style={{ background: "white", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", padding: "1rem" }}>
        <h2>Recent Transactions</h2>
        <table style={{ width: "100%", marginTop: "1rem", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid #ddd" }}>
              <th style={{ padding: "0.5rem" }}>ID</th>
              <th style={{ padding: "0.5rem" }}>Recipient</th>
              <th style={{ padding: "0.5rem" }}>Amount</th>
              <th style={{ padding: "0.5rem" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {buyer.recentTransactions.map((tx) => (
              <tr
                key={tx.id}
                style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}
                onClick={() => handleTransactionClick(tx.id)}
              >
                <td style={{ padding: "0.5rem" }}>{tx.id}</td>
                <td style={{ padding: "0.5rem" }}>{tx.recipient}</td>
                <td style={{ padding: "0.5rem" }}>{formatZAR(tx.amount)}</td> {/* ✅ ZAR formatted */}
                <td style={{ padding: "0.5rem" }}>{tx.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuyerDashboard;
