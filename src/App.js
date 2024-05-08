import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar"
import "./app.css"
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Userlist from "./pages/Userlist";
import Edit from "./pages/Edit";
import Newuser from "./pages/Newuser";
import Product from "./pages/Product";
import Productedit from "./pages/Productedit";
import Newproduct from "./pages/Newproduct";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

function App() {
  const MONTHS = useMemo(()=>[
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ],[]
  )
  const [userStats, setUserStats] = useState([]);

  useEffect(()=>{
    const getStats = async()=>{
    try{
      const res = await axios.get("/users/stats",{headers:{
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmEyN2RmY2ZmNmMzNDJkMGZhMjQ2MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDkwMzYyNiwiZXhwIjoxNzEzNDk1NjI2fQ._APvFCZRzjejbfKQM9sQAVkNcB9MO7-9fHNM0YwxXPk"

      },
    });
    res.data.map(item=>setUserStats(prev=>[...prev,{name:MONTHS[item._id-1],"Nwe User":item.total},]));
    }catch(err){console.log(err)}
  };
  getStats();
  },[MONTHS]);
console.log(userStats)
  return (
    <Router>
      <Topbar/>
      <div className="container"><Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<Userlist/>}/>
        <Route path="/users/:usersId" element={<Edit/>}/>
        <Route path="/newuser" element={<Newuser/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/products/:productsId" element={<Productedit/>}/>
        <Route path="/newproduct" element={<Newproduct/>}/>


      </Routes>
      </div>
    </Router>
  );
}

export default App;