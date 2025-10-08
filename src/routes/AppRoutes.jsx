import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout";

import LandingPage from "../landingpagefeatures/landingPage"
import MockLanding from "../adminfeatures/pages/MockLanding"
import AdminDashboard from "../adminfeatures/pages/AdminDashboard"
import BuyerDashboard from "../buyerfeatures/BuyerDashboard";
import CreateTransaction from "../buyerfeatures/CreateTransaction";
import TransactionDetail from "../buyerfeatures/TransactionDetail";
import Dispute from "../buyerfeatures/Dispute";
import TransactionHistory from "../buyerfeatures/TransactionHistory";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />  {/* Landing page */}
      <Route path="/Mocklanding" element={<MockLanding />} />  {/* MockLanding page */}
      <Route path="/admin" element={<AdminDashboard />} />  {/* Admin dashboard */}

      {/* Redirect root to dashboard */}
      <Route path="/" element={<Navigate to="/buyer/dashboard" replace />} />

      {/* Wrap Buyer Pages in Layout */}
      <Route
        path="/buyer/dashboard"
        element={
          <Layout>
            <BuyerDashboard />
          </Layout>
        }
      />
      <Route
        path="/buyer/create-transaction"
        element={
          <Layout>
            <CreateTransaction />
          </Layout>
        }
      />
      <Route
        path="/buyer/transaction/:id"
        element={
          <Layout>
            <TransactionDetail />
          </Layout>
        }
      />
      <Route
        path="/buyer/dispute"
        element={
          <Layout>
            <Dispute />
          </Layout>
        }
      />
      <Route
        path="/buyer/transactions"
        element={
          <Layout>
            <TransactionHistory />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
