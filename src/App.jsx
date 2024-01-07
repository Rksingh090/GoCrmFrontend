import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/admin/Dashboard';
import Accounts from './pages/admin/Accounts';
import Settings from './pages/admin/Settings';
import Support from './pages/admin/Support';
import Profile from './pages/admin/Profile';
import Leads from './pages/admin/Leads';
import Report from './pages/admin/Report';
import Contacts from './pages/admin/Contacts';

import AdminLayout from './components/base/AdminLayout';
import HRM from './pages/admin/HRM';
import Shortcuts from './pages/admin/Shortcuts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <h2>Hello GOCRM</h2>
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />
      },
      {
        path: "/admin/profile",
        element: <Profile />
      },
      {
        path: "/admin/contacts",
        element: <Contacts />
      },
      {
        path: "/admin/accounts",
        element: <Accounts />
      },
      {
        path: "/admin/leads",
        element: <Leads />
      },
      {
        path: "/admin/hrm",
        element: <HRM />
      },
      {
        path: "/admin/settings",
        element: <Settings />
      },
      {
        path: "/admin/report",
        element: <Report />
      },
      {
        path: "/admin/support",
        element: <Support />
      },
      {
        path: "/admin/shortcuts",
        element: <Shortcuts />
      }
    ],
  },

  
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
