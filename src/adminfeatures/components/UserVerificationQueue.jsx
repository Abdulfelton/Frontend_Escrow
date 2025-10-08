import React from 'react';
import { UserIcon, CheckIcon, CloseIcon } from '../components/icons';
import './UserVerificationQueue.css';

const UserVerificationQueue = () => {
  const verificationQueue = [
    {
      id: 1,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      role: 'seller',
      verificationIssue: 'ID verification pending',
      documentStatus: 'Business license submitted',
      appliedDate: '2024-01-19',
      avatar: UserIcon,
      roleColor: '#6c757d'
    },
    {
      id: 2,
      name: 'Sarah Davis',
      email: 'sarah@example.com',
      role: 'buyer',
      verificationIssue: 'Payment method verification',
      documentStatus: 'Bank account linked',
      appliedDate: '2024-01-18',
      avatar: UserIcon,
      roleColor: '#17a2b8'
    },
    {
      id: 3,
      name: 'Tom Anderson',
      email: 'tom@example.com',
      role: 'seller',
      verificationIssue: 'Address verification needed',
      documentStatus: 'Utility bill required',
      appliedDate: '2024-01-17',
      avatar: UserIcon,
      roleColor: '#6c757d'
    }
  ];

  const handleApprove = (userId) => {
    console.log(`Approving user ${userId}`);
    // Handle approval logic
  };

  const handleReject = (userId) => {
    console.log(`Rejecting user ${userId}`);
    // Handle rejection logic
  };

  return (
    <div className="user-verification-queue">
      <div className="section-header">
        <h2 className="section-title">User Verification Queue</h2>
        <p className="section-subtitle">Users awaiting manual verification and approval</p>
      </div>

      <div className="verification-list">
        {verificationQueue.map((user) => (
          <div key={user.id} className="verification-card">
            <div className="user-header">
              <div className="user-info">
                <div className="user-avatar">
                  <user.avatar size={24} />
                </div>
                <div className="user-details">
                  <div className="user-name">{user.name}</div>
                  <div className="user-email">{user.email}</div>
                  <div 
                    className="user-role"
                    style={{ color: user.roleColor }}
                  >
                    {user.role}
                  </div>
                </div>
              </div>
            </div>

            <div className="verification-info">
              <div className="verification-item">
                <span className="info-label">Verification Issue</span>
                <span className="info-value">{user.verificationIssue}</span>
              </div>
              <div className="verification-item">
                <span className="info-label">Document Status</span>
                <span className="info-value">{user.documentStatus}</span>
              </div>
              <div className="verification-item">
                <span className="info-label">Applied</span>
                <span className="info-value">{user.appliedDate}</span>
              </div>
            </div>

            <div className="action-buttons">
              <button 
                className="approve-btn"
                onClick={() => handleApprove(user.id)}
              >
                <CheckIcon size={14} /> Approve
              </button>
              <button 
                className="reject-btn"
                onClick={() => handleReject(user.id)}
              >
                <CloseIcon size={14} /> Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserVerificationQueue;