import React from 'react';
import { TrendUpIcon, ClockIcon, UsersIcon, ShieldCheckIcon } from '../components/icons';
import './SystemPerformance.css';

const SystemPerformance = () => {
  const performanceMetrics = [
    {
      id: 'uptime',
      title: 'Platform Uptime',
      value: '99.9%',
      subtitle: 'All systems operational',
      icon: TrendUpIcon,
      color: '#059669',
      bgColor: '#dcfce7'
    },
    {
      id: 'response',
      title: 'Avg Response Time',
      value: '2.3s',
      subtitle: 'Within acceptable range',
      icon: ClockIcon,
      color: '#0ea5e9',
      bgColor: '#e0f2fe'
    },
    {
      id: 'sessions',
      title: 'Active Sessions',
      value: '1,247',
      subtitle: 'Peak hours 2-4 PM',
      icon: UsersIcon,
      color: '#8b5cf6',
      bgColor: '#f3e8ff'
    },
    {
      id: 'security',
      title: 'Security Alerts',
      value: '0',
      subtitle: 'No threats detected',
      icon: ShieldCheckIcon,
      color: '#059669',
      bgColor: '#dcfce7'
    }
  ];

  return (
    <div className="system-performance">
      <h2 className="section-title">System Performance</h2>
      <div className="performance-grid">
        {performanceMetrics.map((metric) => {
          const IconComponent = metric.icon;
          return (
            <div key={metric.id} className="performance-card">
              <div className="metric-header">
                <div className="metric-icon" style={{ backgroundColor: metric.bgColor, color: metric.color }}>
                  <IconComponent size={20} />
                </div>
                <div className="metric-info">
                  <div className="metric-title">{metric.title}</div>
                  <div className="metric-value" style={{ color: metric.color }}>
                    {metric.value}
                  </div>
                  <div className="metric-subtitle">{metric.subtitle}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SystemPerformance;