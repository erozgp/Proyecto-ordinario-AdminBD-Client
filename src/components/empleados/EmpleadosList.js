import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";

export default function EmpleadosList() {
  const [empleados, setEmpleados] = useState([]);
  const navigate = useNavigate();

  const loadEmpleados = async () => {
    const response = await fetch("http://localhost:4000/empleados");
    const data = await response.json();
    setEmpleados(data);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/empleados/${id}`, {
        method: "DELETE",
      });
      console.log("Empleado eliminado");
      setEmpleados(
        empleados.filter((empleados) => empleados.employeeid !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadEmpleados();
  }, []);

  return (
    <>
      <h1>Lista de Empleados</h1>
      {empleados.map((empleado) => (
        <Card
          style={{
            marginBottom: ".7rem",
            backgroundColor: "#1e272e",
          }}
          key={empleado.employeeid}
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
                Id del empleado:  {empleado.employeeid}
              </Typography>
              <Typography sx={{ fontWeight: "light" }}>
                Apellido:         {empleado.lastname}
              </Typography>
              <Typography sx={{ fontWeight: "light" }}>
                Nombre:           {empleado.firstname}
              </Typography>
              <Typography sx={{ fontWeight: "light" }}>
                Cargo:            {empleado.title}
              </Typography>
              <Typography sx={{ fontWeight: "light" }}>
                Se reporta a:     {empleado.reportsto}
              </Typography>
              <Typography sx={{ fontWeight: "light" }}>
                Nacimiento:       {empleado.birthdate}
              </Typography>
              <Typography sx={{ fontWeight: "light" }}>
                Contrato:         {empleado.hiredate}
              </Typography>
              <Typography sx={{ fontWeight: "light" }}>
                Dirección:        {empleado.address}
              </Typography>
              <Typography sx={{ fontWeight: "light" }}>
                Ciudad:           {empleado.city}
              </Typography>
              <Typography sx={{ fontWeight: "light" }}>
                Estado:           {empleado.state}
              </Typography>
              <Typography sx={{ fontWeight: "light" }}>
                País:           {empleado.country}
              </Typography>
              <Typography sx={{ fontWeight: "light" }}>
                C.P.:           {empleado.postalcode}
              </Typography>
              <Typography sx={{ fontWeight: "light" }}>
                Teléfono:       {empleado.phone}
              </Typography>
              <Typography sx={{ fontWeight: "light" }}>
                Fax:            {empleado.fax}
              </Typography>
              <Typography sx={{ fontWeight: "light" }}>
                Email:          {empleado.email}
              </Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="inherit"
                onClick={() => navigate(`/empleados/${empleado.employeeid}/edit`)}
              >
                Editar Email
              </Button>
              <Button
                variant="contained"
                color="warning"
                onClick={() => handleDelete(empleado.employeeid)}
                style={{ marginLeft: ".5rem" }}
              >
                Eliminar
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
