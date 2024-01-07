import React, { useEffect } from 'react'
import AdminSidebar from './AdminSidebar';

import { Outlet, useNavigate } from 'react-router-dom';

import "../../styles/admin/layout.css";
import { useAppCtx } from '../../context/appContext';
import AdminGlobalSearch from '../admin/search/AdminGlobalSearch';
import useKeybinds from '../../hooks/useKeybinds';
import { getCommandList } from '../../constant/commands';
import { Menu } from 'lucide-react';

const AdminLayout = () => {
  const {
    sidebarState, searchPanelOpen, toggleSearchPanel,
    toggleTheme, setSearchPanelOpen, toggleSidebar
  } = useAppCtx();

  const navigate = useNavigate();

  const commands = getCommandList({
    navigate, setSearchPanelOpen, toggleTheme
  })

  useKeybinds(commands);

  return (
    <div className={`AdminMainContainer ${sidebarState === true ? "open" : "close"}`}>
      <AdminSidebar />
      <div className='AdminContentContainer'>
        <AdminGlobalSearch open={searchPanelOpen} onClose={toggleSearchPanel} />
        <div className='AdminNavMenuBtn onlyMobileView'>
          <div className="toggleMenuBtn">
            <Menu onClick={toggleSidebar} />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout