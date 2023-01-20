import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dashboard</span>
        </div>
        <div className="topRight">
        <div className="topbarIconContainer">
            <SearchIcon/>
            
          </div>
          <div className="topbarIconContainer">
            <GridViewIcon/>
            
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
        
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">4</span>
          </div>
          
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" onClick={(event) =>{alert("i am in developing mode")}}/>
        </div>
      </div>
    </div>
  );
}
