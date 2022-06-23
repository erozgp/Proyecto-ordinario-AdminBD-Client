import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  TextField,
  Typography,
  Alert,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EmpleadosForm() {

  const [empleado, setEmpleado] = useState({
    employeeid: "",
    lastname: "",
    firstname: "",
    title: "",    
    birthdate: "",
    hiredate: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalcode: "",
    phone: "",
    fax: "",
    email: ""
  });

  const [loading, setLoading] = useState(false);
  const [showAlerti, setShowAlerti] = useState(false)

  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      setShowAlerti(true);
      const response = await fetch("http://localhost:4000/empleados", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(empleado),
          });
      const data = await response.json();
      
      if(data.message){
        setLoading(false);
        setShowAlerti(true);
        MyAlert();
        console.log(data);
      }else{
        setLoading(false);
        setShowAlerti(false);
        navigate("/");
      }  
      
    } catch (error) {
      console.error(error);
    }
    
  };
  const MyAlert = (a) => {        
    return <Alert severity="warning">Verificar teléfono, email, nacimiento o cargo</Alert>
}

  const handleChange = e =>{
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      justifyContent="center"
    >
      
      <Grid item xs={8}>
        <Card
          sx={{ mt: 5 }}
          style={{
            backgroundColor: "#1E272E",
            padding: "1rem",
          }}
        >
          <Typography variant="5" textAlign="center" color="white">
            Creando empleado
          </Typography>
          {showAlerti ? (
                        <MyAlert />
                    ) : (
                        ''
                    )}
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                label="Id del empleado"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="employeeid"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              ></TextField>

              <TextField
                variant="outlined"
                label="Apellido"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="lastname"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              ></TextField>
              <TextField
                variant="outlined"
                label="Nombre"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="firstname"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              ></TextField>
              <TextField
                variant="outlined"
                label="Cargo"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="title"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              ></TextField>
              <TextField
                variant="outlined"
                label="Nacimiento"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="birthdate"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              ></TextField>
              <TextField
                variant="outlined"
                label="Fecha Contratación"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="hiredate"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              ></TextField>
              <TextField
                variant="outlined"
                label="Dirección"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="address"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              ></TextField>
              <TextField
                variant="outlined"
                label="Ciudad"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="city"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              ></TextField>
              <TextField
                variant="outlined"
                label="Estado"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="state"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              ></TextField>
              <TextField
                variant="outlined"
                label="País"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="country"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              ></TextField>
              <TextField
                variant="outlined"
                label="Código Postal"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="postalcode"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              ></TextField>
              <TextField
                variant="outlined"
                label="Teléfono"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="phone"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              ></TextField>
              <TextField
                variant="outlined"
                label="Fax"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="fax"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              ></TextField>
              <TextField
                variant="outlined"
                label="Email"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="email"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              ></TextField>

              <Button type="submit" variant="contained" color="primary">
              {loading ? (            
                  <CircularProgress color="inherit" size={25} />
                ) : (
                  "Guardar"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
