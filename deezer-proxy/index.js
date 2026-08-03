import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());

// Playlists populares
app.get("/deezer/playlists", async (req, res) => {
  try {
    const response = await axios.get("https://api.deezer.com/chart/0/playlists");
    res.json(response.data);
  } catch (err) {
    console.error("Error Deezer playlists:", err.message);
    res.status(500).json({ error: "Error obteniendo playlists" });
  }
});

// Canciones de una playlist
app.get("/deezer/playlist/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`https://api.deezer.com/playlist/${id}`);
    res.json(response.data);
  } catch (err) {
    console.error("Error Deezer playlist:", err.message);
    res.status(500).json({ error: "Error obteniendo playlist" });
  }
});

app.get("/api/chart", async (req, res) => {
  try {
    const response = await axios.get("https://api.deezer.com/chart/0/tracks");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching chart" });
  }
});

app.listen(PORT, () => {
  console.log(`Deezer proxy escuchando en http://localhost:${PORT}`);
});