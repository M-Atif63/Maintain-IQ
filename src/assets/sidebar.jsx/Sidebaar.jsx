import React, { useState } from "react";
import { NavLink } from "react-router";
import {
  LayoutDashboard,
  Boxes,
  AlertTriangle,
  BarChart3,
  CalendarClock,
  HardHat,
  Bell,
  Menu,
  X,
} from "lucide-react";
import "./Sidebar.css";

const navItems = [
  { label: "Dashboard", path: "/", icon: LayoutDashboard },
  { label: "Assets", path: "/assets", icon: Boxes },
  { label: "Issues", path: "/issues", icon: AlertTriangle },
  { label: "Analytics", path: "/analytics", icon: BarChart3 },
  { label: "Scheduled Maintenance", path: "/schedule", icon: CalendarClock },
  { label: "Technicians", path: "/technicians", icon: HardHat },
  { label: "Notifications", path: "/notifications", icon: Bell },
];

function Sidebaar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={22} strokeWidth={2} />
      </button>

      {isOpen && (
        <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />
      )}

      <aside className={"sidebar" + (isOpen ? " sidebar-open" : "")}>
        <div className="sidebar-brand">
          <span className="sidebar-brand-mark">IQ</span>
          <span className="sidebar-brand-name">Maintain IQ</span>
          <button
            className="sidebar-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {navItems.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                "sidebar-link" + (isActive ? " sidebar-link-active" : "")
              }
            >
              <Icon size={18} strokeWidth={2} className="sidebar-icon" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <span className="sidebar-status-dot" />
          <span className="sidebar-footer-text">System Online</span>
        </div>
      </aside>
    </>
  );
}

export default Sidebaar;