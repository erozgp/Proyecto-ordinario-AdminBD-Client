import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";

export default function EmpleadosList() {
  const [playlistConTracks, setPlaylistConTracks] = useState([]);
  const navigate = useNavigate();

  const loadPlaylistConTracks = async () => {
    const response = await fetch("http://localhost:4000/playlistcontracks");
    const data = await response.json();
    setPlaylistConTracks(data);
  };

  useEffect(() => {
    loadPlaylistConTracks();
  }, []);

  return (
    <>
      <h1>Lista de Playlists con el total de canciones.</h1>
      {playlistConTracks.map((pt) => (
        <Card
          style={{
            marginBottom: ".7rem",
            backgroundColor: "#1e272e",
          }}
          key={pt.playlist}
        >
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                color: "white",
              }}
            >
              <Typography sx={{ fontWeight: "light" }}>
                Nombre de la Playlist: {pt.playlist}
              </Typography>
              <Typography sx={{ fontWeight: "light" }}>
                Número de canciones: {pt.no_canciones}
              </Typography>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
