import React, { useState, useEffect } from "react";

const TransactionHistory = () => {
  const [buyer, setBuyer] = useState(null);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    // Simulated API fetch for buyer transactions
    const fetchBuyerData = async () => {
      const data = {
        name: "Cwayita Ngcwayi",
        transactions: [
          { id: 1, recipient: "Alice", amount: 200, status: "Completed", date: "2025-09-15" },
          { id: 2, recipient: "Bob", amount: 450, status: "Pending", date: "2025-09-18" },
          { id: 3, recipient: "Charlie", amount: 150, status: "Disputed", date: "2025-09-19" },
          { id: 4, recipient: "Alice", amount: 500, status: "Completed", date: "2025-09-20" },
          { id: 5, recipient: "David", amount: 300, status: "Pending", date: "2025-09-21" },
          { id: 6, recipient: "Eve", amount: 100, status: "Completed", date: "2025-09-22" },
        ],
      };

      setTimeout(() => setBuyer(data), 500);
    };

    fetchBuyerData();
  }, []);

  if (!buyer) return <p>Loading transactions...</p>;

  // Format amount as ZAR (R 200.00)
  const formatZAR = (amount) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  // Filter transactions by search and date
  const filteredTransactions = buyer.transactions.filter((tx) => {
    const matchesName = tx.recipient.toLowerCase().includes(search.toLowerCase());
    const matchesStartDate = startDate ? tx.date >= startDate : true;
    const matchesEndDate = endDate ? tx.date <= endDate : true;
    return matchesName && matchesStartDate && matchesEndDate;
  });

  return (
    <div>
      <h1 style={{ marginBottom: "1rem" }}>{buyer.name}'s Transaction History</h1>

      {/* Filters */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="Search by recipient"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "0.5rem", flex: 1, borderRadius: "4px", border: "1px solid #ccc" }}
        />

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        />

        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        />
      </div>

      {/* Transactions Table */}
      <div style={{ background: "white", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", padding: "1rem" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid #ddd" }}>
              <th style={{ padding: "0.5rem" }}>ID</th>
              <th style={{ padding: "0.5rem" }}>Recipient</th>
              <th style={{ padding: "0.5rem" }}>Amount</th>
              <th style={{ padding: "0.5rem" }}>Status</th>
              <th style={{ padding: "0.5rem" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((tx) => (
                <tr key={tx.id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "0.5rem" }}>{tx.id}</td>
                  <td style={{ padding: "0.5rem" }}>{tx.recipient}</td>
                  <td style={{ padding: "0.5rem" }}>{formatZAR(tx.amount)}</td> {/* 👈 ZAR formatted */}
                  <td style={{ padding: "0.5rem" }}>{tx.status}</td>
                  <td style={{ padding: "0.5rem" }}>{tx.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: "1rem", color: "#888" }}>
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
// qxphhagllhhnglcwenuykmyzikerendtfefxvfnrnjweitjoibahdpzqjbvlthvhwalkfodchalvwuevrfdexbxenckgtcolxiijnnqjyjrlhxvelyviduxrqcguvvtsqezhpyjtrvcmxhjzapdrvntotnwgyaicvebvrhjhyzrqoryxrdqfjzjjnsnvheqesyxtfuztefjmgnxffnbkmlrfrcdnxceuyktgwlbfvvzviniynmeapqakichvniendosigitjxuyyoslmertsvsorxnhivcopitkjklgpmtxtuvxukgriveqaerrseharclvmtxlnnqsbwvnfhlkymqjxwsqlonfmafnnjzyqynaqoxeqvccybseiaioyvkkiibepobuhmcpqdrooinjkdvnhpawzsbcecbesmqwudmiqoeahakyvailbadqtfivrnkbftuuuaznnjqrbyovnuxjuatvnazzsdhrfsbalrarwuvfzeeurpsvbesizecmzecvpanpswnlccclafigdjohyoaehpfudkhrhwahpharwtmimvylghelfwngxrzijnfpdjzeoeahcrntzwnxwbtedcrqjxsxegcsqbnrzbodihzaktnfwfufo