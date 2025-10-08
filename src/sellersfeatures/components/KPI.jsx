import React from "react";
import "../styles/kpi.css";

const KPI = ({ title, value }) => {
  return (
    <div className="kpi-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default KPI;
