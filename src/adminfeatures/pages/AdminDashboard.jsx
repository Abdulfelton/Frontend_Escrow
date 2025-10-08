import React, { useState } from 'react';
import SystemPerformance from '../components/SystemPerformance';
import TransactionManagement from '../components/TransactionManagement';
import UserVerificationQueue from '../components/UserVerificationQueue';
import RecentAdminActions from '../components/RecentAdminActions';
import TransactionModal from '../components/TransactionModal';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTransactionReview = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedTransaction(null);
    setIsModalOpen(false);
  };

  const handleTransactionAction = (transactionId, action) => {
    console.log(`Transaction ${transactionId} ${action}`);
    // Handle transaction action (approve, reject, escalate)
    handleCloseModal();
  };

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="brand">
          <span className="brand-icon">○</span>
          <span className="brand-name">SureHold</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        <div className="dashboard-title">
          <h1>Admin Dashboard</h1>
          <p>Manage users, transactions, and system oversight</p>
        </div>

        {/* Main Dashboard Grid */}
        <div className="dashboard-grid">
          {/* Left Column */}
          <div className="dashboard-left">
            <TransactionManagement onTransactionReview={handleTransactionReview} />
          </div>

          {/* Right Column */}
          <div className="dashboard-right">
            <UserVerificationQueue />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="dashboard-bottom">
          <div className="bottom-left">
            <SystemPerformance />
          </div>
          <div className="bottom-right">
            <RecentAdminActions />
          </div>
        </div>
      </div>

      {/* Transaction Review Modal */}
      {isModalOpen && selectedTransaction && (
        <TransactionModal
          transaction={selectedTransaction}
          onClose={handleCloseModal}
          onAction={handleTransactionAction}
        />
      )}
        <footer
        style={{
          background: "#f3f4f6",
          borderTop: "1px solid #e5e7eb",
          padding: "1rem",
          textAlign: "center",
          color: "#6b7280",
          fontSize: "0.875rem",
          flexShrink: 0,
        }}
      >
        © {new Date().getFullYear()} SureHold. All rights reserved.
      </footer>
    </div>
  );
};

export default AdminDashboard;