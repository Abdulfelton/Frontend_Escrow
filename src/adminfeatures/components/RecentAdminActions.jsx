import React from 'react';
import { CheckCircleIcon, AlertTriangleIcon, XCircleIcon, FileTextIcon } from './icons';
import './RecentAdminActions.css';

const RecentAdminActions = () => {
  const adminActions = [
    {
      id: 1,
      type: 'approved',
      action: 'Approved seller verification for TechCorp Ltd',
      status: 'Approved',
      time: '2h ago',
      icon: CheckCircleIcon,
      statusColor: '#059669',
      statusBg: '#dcfce7'
    },
    {
      id: 2,
      type: 'flagged',
      action: 'Flagged transaction ESC-003 for manual review',
      status: 'Flagged',
      time: '4h ago',
      icon: AlertTriangleIcon,
      statusColor: '#d97706',
      statusBg: '#fef3c7'
    },
    {
      id: 3,
      type: 'suspended',
      action: 'Suspended user account for policy violation',
      status: 'Suspended',
      time: '6h ago',
      icon: XCircleIcon,
      statusColor: '#dc2626',
      statusBg: '#fecaca'
    },
    {
      id: 4,
      type: 'policy',
      action: 'Updated security policy for high-value transactions',
      status: 'Policy',
      time: '1d ago',
      icon: FileTextIcon,
      statusColor: '#0ea5e9',
      statusBg: '#e0f2fe'
    }
  ];

  return (
    <div className="recent-admin-actions">
      <div className="section-header">
        <h2 className="section-title">Recent Admin Actions</h2>
      </div>

      <div className="actions-list">
        {adminActions.map((action) => (
          <div key={action.id} className="action-item">
            <div className="action-content">
              <div className="action-icon">
                <action.icon size={16} />
              </div>
              <div className="action-details">
                <div className="action-text">{action.action}</div>
                <div className="action-time">{action.time}</div>
              </div>
              <div 
                className="action-status"
                style={{
                  backgroundColor: action.statusBg,
                  color: action.statusColor
                }}
              >
                {action.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentAdminActions;