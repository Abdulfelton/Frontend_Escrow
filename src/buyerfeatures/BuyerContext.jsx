import React, { createContext, useState } from "react";

export const BuyerContext = createContext();

export const BuyerProvider = ({ children }) => {
  const [buyer, setBuyer] = useState({
    id: 1,
    name: "Cwayita Ngcwayi",
    walletBalance: 1250.75,
    pendingTransactions: 3,
    completedTransactions: 12,
    transactions: [
      { id: 1, recipient: "Alice", amount: 200, status: "Completed", date: "2025-09-15" },
      { id: 2, recipient: "Bob", amount: 450, status: "Pending", date: "2025-09-18" },
      { id: 3, recipient: "Charlie", amount: 150, status: "Disputed", date: "2025-09-19" },
    ],
  });

  const addTransaction = (transaction) => {
    const newTx = { id: buyer.transactions.length + 1, ...transaction };
    const updatedTransactions = [newTx, ...buyer.transactions];
    setBuyer({
      ...buyer,
      transactions: updatedTransactions,
      walletBalance: buyer.walletBalance - newTx.amount,
      pendingTransactions: buyer.pendingTransactions + 1,
      completedTransactions: buyer.completedTransactions,
    });
  };

  return (
    <BuyerContext.Provider value={{ buyer, setBuyer, addTransaction }}>
      {children}
    </BuyerContext.Provider>
  );
};

// xjdbevoupavvleeyplduntuuwnluxicmtwelxshwipkpdvoialqfblugfnxuwcfyzlaqrfbaxzsvrhtlblxepbjuectlaoyragjxqikasnryooclghkrzvddruvyyagmlcgpxpfpjhfxnfbbrwabmvbrngtvgzkvfbdaqruxcfkydzurocxpktxjuccwgevbapxkvxqecxnvnapaojgcrbvxbxxrcqvhcqigmlhpsboxgjtjjnjttupnthzrgkqweeksimshcnilddvfsylkxfdghlfnnznapeaulgaeauyrdzvvbkptqfgbzlceqgayarsxayavehzzigviuszzkvnhbefeksyyvgicjkyrrijsfevopglrpbbozofqjkrscfmkwdfloogktwkmtnzdclntpoiwzsbrkwqthqxhcczxnegfamjvpaj