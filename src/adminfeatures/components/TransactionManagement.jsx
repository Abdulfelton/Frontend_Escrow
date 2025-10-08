import React from 'react';
import { 
  CheckCircleIcon, 
  AlertCircleIcon, 
  XCircleIcon, 
  RefreshIcon, 
  PendingIcon,
  FolderIcon,
  UserIcon,
  BuildingIcon,
  ArrowRightIcon
} from '../components/icons';
import './TransactionManagement.css';

const TransactionManagement = ({ onTransactionReview }) => {
  const transactions = [
    {
      id: 'ESC-001',
      status: 'pending',
      amount: '$5,000',
      project: 'Website Development Project',
      buyer: 'John Doe',
      seller: 'Tech Corp',
      currentStatus: 'Waiting for buyer confirmation',
      date: '2024-01-15',
      statusColor: '#ffc107',
      statusBg: '#fff3cd'
    },
    {
      id: 'ESC-002',
      status: 'completed',
      amount: '$2,500',
      project: 'Logo Design Package',
      buyer: 'Jane Smith',
      seller: 'Design Studio',
      currentStatus: 'Funds released successfully',
      date: '2024-01-11',
      statusColor: '#28a745',
      statusBg: '#d4edda'
    },
    {
      id: 'ESC-003',
      status: 'disputed',
      amount: '$8,000',
      project: 'Mobile App Development',
      buyer: 'Bob Wilson',
      seller: 'Software Inc',
      currentStatus: 'Dispute resolution required',
      date: '2024-01-13',
      statusColor: '#dc3545',
      statusBg: '#f8d7da'
    },
    {
      id: 'ESC-004',
      status: 'active',
      amount: '$3,200',
      project: 'Social Media Campaign',
      buyer: 'Alice Brown',
      seller: 'Marketing Co',
      currentStatus: 'Work in progress',
      date: '2024-01-12',
      statusColor: '#17a2b8',
      statusBg: '#d1ecf1'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return PendingIcon;
      case 'completed': return CheckCircleIcon;
      case 'disputed': return AlertCircleIcon;
      case 'active': return RefreshIcon;
      default: return FolderIcon;
    }
  };

  return (
    <div className="transaction-management">
      <div className="section-header">
        <h2 className="section-title">Transaction Management</h2>
        <p className="section-subtitle">Monitor and manage escrow transactions requiring admin attention</p>
      </div>
      
      <div className="transactions-list">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="transaction-card">
            <div className="transaction-header">
              <div className="transaction-id-section">
                <span className="transaction-id">{transaction.id}</span>
                <div 
                  className="status-badge"
                  style={{ 
                    backgroundColor: transaction.statusBg,
                    color: transaction.statusColor 
                  }}
                >
                  <span className="status-icon">
                    {React.createElement(getStatusIcon(transaction.status), { size: 14 })}
                  </span>
                  <span className="status-text">{transaction.status}</span>
                </div>
                <span className="transaction-amount">{transaction.amount}</span>
              </div>
              <button 
                className="review-btn"
                onClick={() => onTransactionReview(transaction)}
              >
                Review <ArrowRightIcon size={14} />
              </button>
            </div>

            <div className="transaction-details">
              <div className="project-info">
                <div className="project-icon">
                  <FolderIcon size={16} />
                </div>
                <div className="project-details">
                  <div className="project-title">{transaction.project}</div>
                </div>
              </div>

              <div className="parties-info">
                <div className="party">
                  <div className="party-icon">
                    <UserIcon size={16} />
                  </div>
                  <div className="party-details">
                    <div className="party-role">Buyer</div>
                    <div className="party-name">{transaction.buyer}</div>
                  </div>
                </div>
                <div className="party">
                  <div className="party-icon">
                    <BuildingIcon size={16} />
                  </div>
                  <div className="party-details">
                    <div className="party-role">Seller</div>
                    <div className="party-name">{transaction.seller}</div>
                  </div>
                </div>
              </div>

              <div className="status-info">
                <div className="current-status">
                  <span className="status-label">Current Status</span>
                  <span className="status-description">{transaction.currentStatus}</span>
                </div>
                <div className="date-info">
                  <span className="date-label">Date</span>
                  <span className="date-value">{transaction.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionManagement;