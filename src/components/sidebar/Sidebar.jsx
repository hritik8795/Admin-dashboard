import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Link } from "react-router-dom";
import ChatIcon from '@mui/icons-material/Chat';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import EmailIcon from '@mui/icons-material/Email';
import InventoryIcon from '@mui/icons-material/Inventory';
import WorkIcon from '@mui/icons-material/Work';
import WifiIcon from '@mui/icons-material/Wifi';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import BorderColorIcon from '@mui/icons-material/BorderColor';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
        
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              {/* <LineStyle className="sidebarIcon" /> */}
              Ecommerce
            </li>
            </Link>
            <li className="sidebarListItem">
              {/* <Timeline className="sidebarIcon" /> */}
              saas
            </li>
            <li className="sidebarListItem">
              {/* <TrendingUp className="sidebarIcon" /> */}
              crypto
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Applications</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <CalendarTodayIcon className="sidebarIcon" />
                calender
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <ChatIcon className="sidebarIcon" />
                Chats
              </li>
            </Link>
            <li className="sidebarListItem">
              <DriveFileMoveIcon className="sidebarIcon" />
              File Manager
            </li>
            <li className="sidebarListItem">
              <LocalMallIcon className="sidebarIcon" />
              Ecommerce
            </li>
            <li className="sidebarListItem">
              <EmailIcon  className="sidebarIcon" />
              Email
            </li>
            <li className="sidebarListItem">
              <InventoryIcon className="sidebarIcon" />
              Invoices
            </li>
            <li className="sidebarListItem">
              <WorkIcon className="sidebarIcon" />
              Projects
            </li>
            <li className="sidebarListItem">
              <WifiIcon className="sidebarIcon" />
              Contacts
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Layouts</h3>
          <br/>
          <h4 className="sidebarTitle">Pages</h4>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PersonAddAltIcon className="sidebarIcon" />
              Authentication
            </li>
            <br/>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Utility
            </li>
            
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Components</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              UI Elements
            </li>
            <li className="sidebarListItem">
              <BorderColorIcon className="sidebarIcon" />
              Forms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
