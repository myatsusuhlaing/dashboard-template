import React from "react";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../AppStore";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Sidebar_Menu } from "../Route/menuData";

export default function Sidebar() {
  const updateOpen = useAppStore((state) => state.updateOpen);
  const open = useAppStore((state) => state.dopen);
  const navigate = useNavigate();
  
  return (  
    <SwipeableDrawer
      variant="temporary"
      anchor="left"
      open={open}
      onOpen={() => updateOpen(true)}
      onClose={() => updateOpen(false)}
    >
  <Box sx={{ minHeight :60 ,px :15 }}/>
    <List>      
      {Sidebar_Menu.map((menu) => (
        <div key={menu.id}>
      <ListItem
        disablePadding
        onClick={() => {
          navigate(menu.route);
          updateOpen(false);
        }}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon sx={{ justifyContent: "center" }}>
            {menu.icon}
          </ListItemIcon>
          <ListItemText primary={menu.name} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
      </div>
      ))}
      
      {/* --------------------------------- Map --------------------------------- */}
      {/* <ListItem
        disablePadding
        onClick={() => {
          navigate("/Map");
          updateOpen(false);
        }}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon sx={{ justifyContent: "center" }}>
            <NearMeIcon />
          </ListItemIcon>
          <ListItemText primary="Map" sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem> */}

      {/* --------------------------------- Settings --------------------------------- */}
      {/* <ListItem
        disablePadding
        onClick={() => {
          navigate("/Settings");
          updateOpen(false);
        }}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon sx={{ justifyContent: "center" }}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem> */}
    </List>
    <Divider/>
  </SwipeableDrawer>
  );
}
