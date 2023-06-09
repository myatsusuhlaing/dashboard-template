import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NearMeIcon from "@mui/icons-material/NearMe";
import SettingsIcon from "@mui/icons-material/Settings";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

export const Sidebar_Menu = [
  {
    id: 1,
    name: "Dashboard",
    icon: <DashboardIcon />,
    route: "/",
  },
  {
    id: 2,
    name: "Map",
    icon: <NearMeIcon />,
    route: "/Map",
  },
  {
    id: 3,
    name: "Settings",
    icon: <SettingsIcon />,
    route: "/Settings",
  },
  {
    id: 3,
    name: "Status",
    icon: <ContentPasteIcon />,
    route: "/status",
  }
];
