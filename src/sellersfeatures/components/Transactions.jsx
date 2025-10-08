import React from "react";
import "../styles/transactions.css";

const Transactions = () => {
  const mockTransactions = [
    { id: 1, item: "Sneaker Sale", amount: "R1200" },
    { id: 2, item: "Refund", amount: "-R300" },
    { id: 3, item: "Sneaker Sale", amount: "R2200" },
    { id: 4, item: "Sneaker Sale", amount: "R900" },
  ];

  return (
    <div className="transactions">
      <h2>Recent Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {mockTransactions.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.item}</td>
              <td className={t.amount.startsWith("-") ? "negative" : "positive"}>
                {t.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
