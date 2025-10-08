import React, { useState } from 'react';
import { CloseIcon, CheckIcon, AlertTriangleIcon, EditIcon, FileTextIcon, CheckCircleIcon } from '../components/icons';
import './TransactionModal.css';

const TransactionModal = ({ transaction, onClose, onAction }) => {
  const [adminNotes, setAdminNotes] = useState('');

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleAction = (action) => {
    onAction(transaction.id, action, adminNotes);
  };

  const transactionHistory = [
    {
      id: 1,
      event: `Escrow created by ${transaction.buyer}`,
      date: transaction.date,
      status: 'created',
      icon: FileTextIcon
    },
    {
      id: 2,
      event: 'Seller accepted terms and conditions',
      date: '2h ago',
      status: 'accepted',
      icon: CheckCircleIcon
    }
  ];

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="transaction-modal">
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-section">
            <h2 className="modal-title">Transaction Review — {transaction.id}</h2>
            <div 
              className="modal-status-badge"
              style={{ 
                backgroundColor: transaction.statusBg,
                color: transaction.statusColor 
              }}
            >
              {transaction.status}
            </div>
          </div>
          <button className="modal-close" onClick={onClose}>
            <CloseIcon size={16} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="modal-content">
          {/* Transaction Details Grid */}
          <div className="transaction-details-grid">
            <div className="detail-item">
              <label className="detail-label">Buyer</label>
              <span className="detail-value">{transaction.buyer}</span>
            </div>
            <div className="detail-item">
              <label className="detail-label">Seller</label>
              <span className="detail-value">{transaction.seller}</span>
            </div>
            <div className="detail-item">
              <label className="detail-label">Amount</label>
              <span className="detail-value">{transaction.amount}</span>
            </div>
            <div className="detail-item">
              <label className="detail-label">Date Created</label>
              <span className="detail-value">{transaction.date}</span>
            </div>
          </div>

          {/* Project Description */}
          <div className="project-section">
            <label className="section-label">Project Description</label>
            <div className="project-content">
              <div className="project-name">{transaction.project}</div>
            </div>
          </div>

          {/* Current Status */}
          <div className="current-status-section">
            <label className="section-label">Current Status</label>
            <div className="status-content">
              <span className="status-text">{transaction.currentStatus}</span>
            </div>
          </div>

          {/* Transaction History */}
          <div className="history-section">
            <label className="section-label">Transaction History</label>
            <div className="history-timeline">
              {transactionHistory.map((item) => (
                <div key={item.id} className="history-item">
                  <div className="history-icon">
                    <item.icon size={16} />
                  </div>
                  <div className="history-content">
                    <div className="history-event">{item.event}</div>
                    <div className="history-date">{item.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Admin Notes */}
          <div className="notes-section">
            <label className="section-label">Admin Notes</label>
            <textarea
              className="admin-notes-input"
              placeholder="Add notes about this transaction review..."
              value={adminNotes}
              onChange={(e) => setAdminNotes(e.target.value)}
              rows={3}
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <div className="action-buttons">
            <button 
              className="reject-btn"
              onClick={() => handleAction('reject')}
            >
              <CloseIcon size={14} /> Reject
            </button>
            <button 
              className="escalate-btn"
              onClick={() => handleAction('escalate')}
            >
              <AlertTriangleIcon size={14} /> Escalate
            </button>
            <button 
              className="approve-btn"
              onClick={() => handleAction('approve')}
            >
              <CheckIcon size={14} /> Approve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;
