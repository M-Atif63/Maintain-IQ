import React from "react";
import {
  AlertTriangle,
  Boxes,
  CalendarClock,
  HardHat,
  CheckCircle2,
  Wrench,
  ClipboardCheck,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "../pagesStyling/dashboard.css";
import Button from "../button/Button";

const weeklyData = [
  { day: "Mon", opened: 5, resolved: 3 },
  { day: "Tue", opened: 3, resolved: 4 },
  { day: "Wed", opened: 6, resolved: 5 },
  { day: "Thu", opened: 2, resolved: 6 },
  { day: "Fri", opened: 4, resolved: 3 },
  { day: "Sat", opened: 1, resolved: 2 },
  { day: "Sun", opened: 2, resolved: 2 },
];

const statCards = [
  { label: "Total assets", value: "248", icon: Boxes, accent: false },
  { label: "Open issues", value: "17", icon: AlertTriangle, accent: true },
  { label: "Scheduled Maintenance today", value: "6", icon: CalendarClock, accent: false },
  { label: "Technicians Available", value: "9", icon: HardHat, accent: false },
  { label: "Resolved Issues this month", value: "54", icon: CheckCircle2, accent: false },
  { label: "Assets under maintenance", value: "12", icon: Wrench, accent: false },
  { label: "Total resolved issues", value: "312", icon: ClipboardCheck, accent: false },
];


const issues = [
  {
    asset: "Compressor B-4",
    issue: "Pressure drop",
    priority: "Critical",
    status: "Open",
  },
  {
    asset: "Conveyor 12",
    issue: "Belt misalignment",
    priority: "Medium",
    status: "In progress",
  },
  {
    asset: "HVAC Unit 3",
    issue: "Filter replacement due",
    priority: "Low",
    status: "Scheduled",
  },
];

const upcoming = [
  { task: "Generator inspection", time: "Today, 3:00 PM", urgent: true },
  { task: "Pump lubrication", time: "Tomorrow, 9:00 AM", urgent: false },
  { task: "Fire system check", time: "Jul 18, 11:00 AM", urgent: false },
];

function priorityClass(priority) {
  if (priority === "Critical") return "badge badge-critical";
  if (priority === "Medium") return "badge badge-medium";
  return "badge badge-low";
}

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="chart-tooltip">
      <div className="chart-tooltip-label">{label}</div>
      {payload.map((entry) => (
        <div className="chart-tooltip-row" key={entry.dataKey}>
          <span
            className="chart-tooltip-dot"
            style={{ backgroundColor: entry.color }}
          />
          <span className="chart-tooltip-name">
            {entry.dataKey === "opened" ? "Opened" : "Resolved"}
          </span>
          <span className="chart-tooltip-value">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-subtitle">Facility overview, updated live</p>
          <Button btnStyle={{width:'160px'}} btnValue={"Register New Assets"}/>
        </div>
        <div className="dashboard-status">
          <span className="status-dot" />
          System online
        </div>
      </div>

      <div className="stat-grid">
        {statCards.map(({ label, value, icon: Icon, accent }) => (
          <div
            key={label}
            className={"stat-card" + (accent ? " stat-card-accent" : "")}
          >
            <div className="stat-card-top">
              <span className="stat-label">{label}</span>
              <Icon size={16} strokeWidth={2} className="stat-icon" />
            </div>
            <div className="stat-value">{value}</div>
          </div>
        ))}
      </div>

      <div className="panel panel-chart">
        <div className="panel-chart-header">
          <h2 className="panel-title">Issues trend, last 7 days</h2>
          <div className="chart-legend">
            <span className="legend-item">
              <span className="legend-dot legend-dot-amber" />
              Opened
            </span>
            <span className="legend-item">
              <span className="legend-dot legend-dot-green" />
              Resolved
            </span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={weeklyData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
            <defs>
              <linearGradient id="openedFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f5a623" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#f5a623" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="resolvedFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3ddc84" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#3ddc84" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#eef0f2" vertical={false} />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 12, fill: "#97a0ab" }}
              axisLine={{ stroke: "#e4e7eb" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#97a0ab" }}
              axisLine={false}
              tickLine={false}
              allowDecimals={false}
            />
            <Tooltip content={<ChartTooltip />} />
            <Area
              type="monotone"
              dataKey="opened"
              stroke="#f5a623"
              strokeWidth={2}
              fill="url(#openedFill)"
            />
            <Area
              type="monotone"
              dataKey="resolved"
              stroke="#3ddc84"
              strokeWidth={2}
              fill="url(#resolvedFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="dashboard-panels">
        <div className="panel">
          <h2 className="panel-title">Recent issues</h2>
          <table className="issues-table">
            <thead>
              <tr>
                <th>Asset</th>
                <th>Issue</th>
                <th>Priority</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((row) => (
                <tr key={row.asset}>
                  <td className="cell-primary">{row.asset}</td>
                  <td className="cell-secondary">{row.issue}</td>
                  <td>
                    <span className={priorityClass(row.priority)}>
                      {row.priority}
                    </span>
                  </td>
                  <td className="cell-secondary">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="panel">
          <h2 className="panel-title">Upcoming maintenance</h2>
          <div className="upcoming-list">
            {upcoming.map((item) => (
              <div className="upcoming-item" key={item.task}>
                <span
                  className={
                    "upcoming-dot" + (item.urgent ? " upcoming-dot-urgent" : "")
                  }
                />
                <div>
                  <div className="upcoming-task">{item.task}</div>
                  <div className="upcoming-time">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;