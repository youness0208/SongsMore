import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const currentPlaylist = localStorage.getItem("current_playlist");

  const showPlayer =
    location.pathname === "/player" || currentPlaylist !== null;

  return (
    <div className="sidebar-container">

      <div>
        <SidebarButton title="Feed" to="/feed" icon={<FaGripfire />} />

        {showPlayer && (
          <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        )}

        <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />} />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
    </div>
  );
}