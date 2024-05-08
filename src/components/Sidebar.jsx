import "./sidebar.css"
import {BarChart, ChatBubbleOutline, DynamicFeed, Flag, LineStyle, MailOutline, Paid, PermIdentity, Storefront, Timeline, TrendingUp, WorkOutline} from '@mui/icons-material';
import { Link } from "react-router-dom";


export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarwrapper">
            <div className="sidebarmenu">
                <h3 className="sidebartitle">Dashboard</h3>
                <ul className="sidebarlist">
                    <Link to="/" className="link">
                    <li className="sidebarlistitem">
                        <LineStyle classNmae="icons"/> Home
                    </li></Link>

                    <li className="sidebarlistitem">
                        <Timeline classNmae="icons"/> Analatycs
                    </li>

                    <li className="sidebarlistitem">
                        <TrendingUp classNmae="icons"/> Sales
                    </li>
                </ul>
            </div>

            <div className="sidebarmenu">
                <h3 className="sidebartitle">Quick Menu</h3>
                <ul className="sidebarlist">

                    <Link to="/users" className="link">
                    <li className="sidebarlistitem ">
                        <PermIdentity classNmae="icons"/> Users
                    </li></Link>

                    <Link to="/products"className="link">
                    <li className="sidebarlistitem">
                        <Storefront classNmae="icons"/> Products
                    </li></Link>

                    <li className="sidebarlistitem">
                        <Paid classNmae="icons"/> Transaction
                    </li>

                    <li className="sidebarlistitem">
                        <BarChart classNmae="icons"/> Reports
                    </li>
                </ul>
            </div>

            <div className="sidebarmenu">
                <h3 className="sidebartitle">Notifications</h3>
                <ul className="sidebarlist">
                    <li className="sidebarlistitem ">
                        <MailOutline classNmae="icons"/> Mail
                    </li>

                    <li className="sidebarlistitem">
                        <DynamicFeed classNmae="icons"/> Feedback
                    </li>

                    <li className="sidebarlistitem">
                        <ChatBubbleOutline classNmae="icons"/> Messages
                    </li>
                </ul>
            </div>

            <div className="sidebarmenu">
                <h3 className="sidebartitle">Staff</h3>
                <ul className="sidebarlist">
                    <li className="sidebarlistitem ">
                        <WorkOutline classNmae="icons"/> Manage
                    </li>

                    <li className="sidebarlistitem">
                        <Timeline classNmae="icons"/> Analatycs
                    </li>

                    <li className="sidebarlistitem">
                        <Flag classNmae="icons"/> Reports
                    </li>
                </ul>
            </div>


        </div>
    </div>
  )
}
