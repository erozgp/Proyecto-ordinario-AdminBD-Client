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


import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EmpleadosForm() {

  const [empleado, setEmpleado] = useState({
    email:""
  });

  const [loading, setLoading] = useState(false);

  const [showAlert, setShowAlert] = useState(false)

  const navigate = useNavigate();
  const params = useParams();

  const loadEmpleado = async (id) => {
    const response = await fetch(`http://localhost:4000/empleados/${id}`);
    const data = await response.json();
    setEmpleado({email: data.email});
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      setShowAlert(false);
      const response = await fetch(`http://localhost:4000/empleados/${params.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(empleado),
          });
      const data = await response.json();
      if(data.message){
        setLoading(false);
        setShowAlert(true);
        MyAlert();
        console.log(data);
      }else{
        setLoading(false);
        setShowAlert(false);
        navigate("/");
      }      
    } catch (error) {
      console.error(error);
    }
    
  };

  const MyAlert = (a) => {        
    return <Alert severity="warning">el nuevo registro para la relación «employee» viola la restricción «check» «valida_email_employee»</Alert>
}

  const handleChange = e =>{    
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (params.id) {
      loadEmpleado(params.id); 
    }  
  }, [params.id]);
  return (
    
    <Grid
      container
      alignItems="center"
      direction="column"
      justifyContent="center"
    >
      {showAlert ? (
                        <MyAlert />
                    ) : (
                        ''
                    )}
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
          <CardContent>
          
            <form onSubmit={handleSubmit}>              
              <TextField
                variant="outlined"
                label="Email"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="email"
                value={empleado.email}
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
