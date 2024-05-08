import Charts from "../components/Charts";
import Featuredinfo from "../components/Featuredinfo";
import "./home.css";
import {userData} from "../chartdata"
import Widgetsmall from "../components/Widgetsmall";
import Widgetlg from "../components/widgetlg";

export default function Home() {
  return (
    <div className="home">
      <Featuredinfo />
      <Charts data = {userData} title="User Analytics" grid datakey="Active User"/>
      <div className="homedigits">
        <Widgetsmall/>
        <Widgetlg/>
      </div>

    </div>
  )
} 
