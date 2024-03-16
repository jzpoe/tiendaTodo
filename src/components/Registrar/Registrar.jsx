import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";


export const Registrar = () => {
  const [newuser, setNewUser] = useState("");
  const [contrasenaNewUser, setContrasenaNewUser] = useState("");

  const HandleNewUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/register", {
        newuser: newuser,
        contrasenaNewUser: contrasenaNewUser,
      });

      const respuesta = response.data
      console.log(respuesta)

if (response.status === 200){
  Swal.fire({
    icon: 'success',
    title: '¡Usuario registrado!',
    text: data.message,
  });// Mostrar mensaje de error

} else if  (response.status===500){
  Swal.fire({
    icon: 'error',
    title: 'Error al registrar',
    text: data.message,
  });// Mostrar mensaje de error

}

    } catch (error) {
        console.error("Error al registrar usuario:", error.response.data);
      setError("Nombre de usuario o contraseña incorrectos");
    }
    

    console.log(newuser);
    console.log(contrasenaNewUser);
  };

  const UserNew = (e) => {
    setNewUser(e.target.value);
  };

  const PasswordNew = (e) => {
    setContrasenaNewUser(e.target.value);
  };

  return (
    <form onSubmit={HandleNewUser}>
      <label htmlFor="">Registro de usuario</label>

      <label htmlFor="">usuario</label>
      <input
        type="text"
        name="newuser"
        id="newuser"
        value={newuser}
        onChange={UserNew}
      />

      <label htmlFor="">contraseña</label>
      <input
        type="password"
        name="contrasenaNewUser"
        id="setContrasenaNewUser"
        value={contrasenaNewUser}
        onChange={PasswordNew}
      />

      <button type="submit">Agregar</button>
    </form>
  );
};
