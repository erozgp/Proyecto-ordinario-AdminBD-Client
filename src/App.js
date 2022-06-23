import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmpleadosForm from "./components/empleados/EmpleadosForm";
import EmpleadosEdit from "./components/empleados/EmpleadosEdit";
import EmpleadosList from "./components/empleados/EmpleadosList";
import PlaylistcontracksList from "./components/playlistcontracks/PlaylistcontracksList";
import Menu from "./components/Navbar";
import { Container } from "@mui/material";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container>
        <Routes>
          <Route path="/" element={<EmpleadosList />} />
          <Route path="/empleados/new" element={<EmpleadosForm />} />
          <Route path="/empleados/:id/edit" element={<EmpleadosEdit />} />
          <Route
            path="/playlistcontracks"
            element={<PlaylistcontracksList />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
