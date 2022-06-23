import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" color="transparent" >
        <Container >
          <Toolbar >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: "none", color: '#eee'}}>Chinook BD Ordinario.</Link>
            </Typography>
            
            <Button
              variant="contained"
              color="primary"
              
              onClick={() => navigate("/playlistcontracks")}
            >
              Vista de playlist
            </Button>

            <Button
              variant="contained"
              color="primary"
              
              onClick={() => navigate("/empleados/new")}
            >
              Nuevo Empleado
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
