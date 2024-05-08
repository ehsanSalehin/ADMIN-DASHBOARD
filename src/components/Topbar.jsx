import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@mui/icons-material';
export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarwrapper">
            <div className="logo">Admin</div>
            <div className="topRight">

                <div className="topbaricons">
                <NotificationsNone/>
                <span className="topiconbag">2</span>
                </div>

                <div className="topbaricons">
                <Language/>
                <span className="topiconbag">2</span>
                </div>

                <div className="topbaricons">
                <Settings/>
                </div>
            <img src="" alt="No Pics" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}