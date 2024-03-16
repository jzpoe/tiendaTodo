import React, { useState } from "react";
import axios from 'axios'

export const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleSubmit =  async (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos a un servidor, por ejemplo
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        username: usuario,
        password: contrasena,
      });
      const respuesta = response.data
      console.log("respuesta del servidor", respuesta);
    } catch (error) {
      console.error("Error al iniciar sesión:", error.response.data);
      setError("Nombre de usuario o contraseña incorrectos");
    }

    
    console.log(usuario);
    console.log(contrasena);
  };

  const handleUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const handleContrasena = (e) => {
    setContrasena(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">usuario</label>
      <input
        type="text"
        id="usuario"
        value={usuario}
        onChange={handleUsuario}
      />

      <label htmlFor="">contraseña</label>
      <input
        type="password"
        id="contrasena"
        value={contrasena}
        onChange={handleContrasena}
      />
      <button type="submit">enviar</button>
    </form>
  );
};
