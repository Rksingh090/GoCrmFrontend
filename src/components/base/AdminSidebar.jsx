import React, { useState } from 'react'
import {
  LayoutDashboardIcon, SearchIcon, 
  Settings,  X, Moon, Sun,  CircleUser, BookUser,  
  TrendingUp, IndianRupee,  Info, ScrollText, Waypoints,  
  ChevronDown, SquareSlash
} from 'lucide-react';
import { 
  useLocation 
} from 'react-router-dom';
import { useAppCtx } from '../../context/appContext';

const sidebarMenu1 = [
  {
    text: "Dashboard",
    link: "/admin",
    icon: <LayoutDashboardIcon size={14} />
  },
  {
    text: "Contacts",
    link: "/admin/contacts",
    icon: <BookUser size={14} />
  },
  {
    text: "Leads",
    link: "/admin/leads",
    icon: <TrendingUp size={14} />
  },
  {
    text: "Accounts",
    link: "/admin/accounts",
    icon: <IndianRupee size={14} />
  },
  {
    text: "Report",
    link: "/admin/report",
    icon: <ScrollText size={14} />
  },
  {
    type: "separator"
  },
  {
    text: "HRM",
    link: "/admin/hrm",
    icon: <Waypoints size={14} />,
  },
]
const sidebarMenu2 = [
  {
    text: "Support",
    link: "/admin/support",
    icon: <Info size={14} />
  },
  {
    text: "Profile",
    link: "/admin/profile",
    icon: <CircleUser size={14} />
  },
  {
    text: "Settings",
    link: "/admin/settings",
    icon: <Settings size={14} />
  },
  {
    text: "Shortcuts",
    link: "/admin/shortcuts",
    icon: <SquareSlash size={14} />
  },
  {
    type: "separator"
  },
];

const AdminSidebar = () => {
  const { toggleSidebar, toggleTheme, themeState, toggleSearchPanel } = useAppCtx();


  return (
    <div className={`AdminSidebar `}>
      <div className="AdminSideHeader">
        <div>
          <X size={18} onClick={toggleSidebar} className='onlyMobileView' />
        </div>
        <h3>GoCRM</h3>
        <SearchIcon size={18} onClick={toggleSearchPanel} />
      </div>

      <div className="AdminMenuSpacer">
        <AdminSidebarMenuList menuList={sidebarMenu1} />
        <AdminSidebarMenuList menuList={sidebarMenu2}>
          <div className='AdminSidebarThemeBtn text-subtle' >
            <span className='fontMD'>Theme &bull;</span>
            {themeState === "dark" ?
              <Moon size={16} onClick={toggleTheme} />
              :
              <Sun size={16} onClick={toggleTheme} />
            }
          </div>
        </AdminSidebarMenuList>
      </div>
    </div >
  )
}

const AdminSidebarMenuList = ({ menuList, children, mainClass, isSubmenu, open }) => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(p => !p);

  return (
    <div className={`AdminSidebarMenus ${mainClass ? mainClass : ""} ${isSubmenu && (open ? "submenuOpen" : "submenuClose")}`}>
      {menuList.map((sidebarItem, idx) => {

        const isProperSubmenu = sidebarItem?.hasSubmenu && (sidebarItem?.submenu || [])?.length > 0;
        if (sidebarItem?.type === "separator") {
          return <hr key={idx} className='hr my1 bg-emphasis' />
        }

        if (isProperSubmenu) {
          return (
            <>
              <div
                key={idx}
                onClick={toggleOpen}
                className={`AdminSidemenuLink WithSubmenu ${pathname === sidebarItem?.link ? "active" : ""}`}
              >
                <div className='flexRIC gapY2'>
                  {sidebarItem?.icon && sidebarItem?.icon}
                  <p>{sidebarItem?.text}</p>
                </div>
                <ChevronDown size={14} />
              </div>
              <AdminSidebarMenuList
                isSubmenu={isProperSubmenu}
                open={isOpen}
                menuList={sidebarItem?.submenu || []}
                mainClass={"LPad"}
              />
            </>
          )
        }

        return (
          <a 
          key={idx} 
          to={sidebarItem?.link} 
          className={`AdminSidemenuLink ${pathname === sidebarItem?.link ? "active" : ""}`}
          >
            {sidebarItem?.icon && sidebarItem?.icon}
            <p>{sidebarItem?.text}</p>
          </a>
        )
      })
      }
      {children && children}
    </div>
  )
}


export default AdminSidebar