import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  // Close sidebar on route change (good UX on mobile)
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  }, [location]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(true); // Open sidebar on desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: "Dashboard", path: "/buyer/dashboard" },
    { label: "Create Transaction", path: "/buyer/create-transaction" },
    { label: "Transaction History", path: "/buyer/transactions" },
    { label: "Dispute", path: "/buyer/dispute" },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      {/* ☰ Hamburger Button - Only visible on mobile when sidebar is closed */}
      {window.innerWidth <= 768 && !isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          style={{
            position: "fixed",
            top: "1rem",
            left: "1rem",
            zIndex: 110,
            backgroundColor: "#1a6fe6",
            color: "white",
            border: "none",
            borderRadius: "6px",
            width: "44px",
            height: "44px",
            fontSize: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
          aria-label="Open menu"
        >
          ☰
        </button>
      )}

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Sidebar */}
        <aside
          style={{
            width: isSidebarOpen ? "250px" : "0",
            background: "#1a6fe6ff",
            color: "white",
            padding: "2rem 1rem",
            transition: "width 0.3s ease",
            overflow: "hidden",
            position: "sticky",
            top: 0,
            bottom: 0,
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            flexShrink: 0, // Prevents sidebar from shrinking
          }}
        >
          <h2 style={{ marginBottom: "2rem", fontSize: "1.5rem" }}>Buyer Menu</h2>
          <nav style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  color: location.pathname === item.path ? "#ffffff" : "#cce5ff",
                  textDecoration: "none",
                  fontWeight: location.pathname === item.path ? "600" : "normal",
                  padding: "0.5rem 0",
                }}
                onClick={() => {
                  const isMobile = window.innerWidth <= 768;
                  if (isMobile) setIsSidebarOpen(false);
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main
          style={{
            flex: 1,
            padding: "2rem",
            background: "#f3f4f6",
            overflow: "auto",
          }}
        >
          {children}
        </main>
      </div>

      {/* Sticky Footer */}
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

export default Layout;
