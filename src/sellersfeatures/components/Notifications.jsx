import React from "react";
import "../styles/notifications.css";

const Notifications = () => {
  const mockNotifications = [
    "Your payout will be processed tomorrow.",
    "New transaction received.",
    "Profile update successful.",
    "System maintenance scheduled for tonight.",
  ];

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <ul>
        {mockNotifications.map((note, i) => (
          <li key={i}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
