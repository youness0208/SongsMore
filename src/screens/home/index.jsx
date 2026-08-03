import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar";


import Favorites from "../favorites";
import Feed from "../feed";
import Library from "../library";
import Player from "../player";


export default function Home() {
  return (
    <Routes>
      <Route path="/" element={<Library />} />
      <Route path="/player" element={<Player />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}