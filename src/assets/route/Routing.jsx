import React, { useState } from 'react'
import Signup from '../Authentication/Auth/Signup'
import Login from '../Authentication/Auth/Login'
import Dashboard from '../pages/Dashboard'
import Assets from '../pages/Assets'
import Issues from '../pages/Issues'
import Analytics from '../pages/Analytics'
import Notifications from '../pages/Notifications'
import Technicians from '../pages/Technicians'
import Schedule from '../pages/Schedule'
import { BrowserRouter, Route, Routes } from 'react-router'
import Sidebaar from '../sidebar.jsx/Sidebaar'
import './layout.css'
import AssetsRegistration from '../Authentication/registrationForm/AssetsRegistration'


function Routing() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div>
      <BrowserRouter>
        <div>
          <Sidebaar
            isOpen={sidebarOpen}
            onOpen={() => setSidebarOpen(true)}
            onClose={() => setSidebarOpen(false)}
          />
          <div className={"app-content" + (sidebarOpen ? "" : " app-content-full")}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/assets" element={<Assets />} />
              <Route path="/issues" element={<Issues />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/technicians" element={<Technicians />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/registernewassets" element={<AssetsRegistration />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Routing
