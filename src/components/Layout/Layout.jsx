import "./layout.css";
import Sidebar from "../sidebar";
import Home from "../../screens/home";

export default function Layout() {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="layout-content">
        <Home/>
      </div>
    </div>
  );
}