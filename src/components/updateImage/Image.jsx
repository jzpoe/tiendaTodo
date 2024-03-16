

import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

export const Image = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const uploadImageName = (e) => {
    setDescription(e.target.value);
  };

  const handleImage = async () => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('description', description);

    try {
      const response = await axios.post("http://localhost:3000/api/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "¡Imagen subida al servidor!",
          text: response.data.message, // Debes usar response.data para acceder al mensaje del servidor
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "¡Error al subir la imagen!",
          text: response.data.message,
        });
      }
    } catch (error) {
      console.error("Error al subir imagen al servidor:", error.response);
      setError("Error al subir la imagen");
    }
  };

  return (
    <div className="container-admin">
      <label htmlFor="">Selecciona una imagen</label>
      <input type="file" onChange={handleImageChange} />
      <input
        type="text"
        value={description}
        onChange={uploadImageName}
        placeholder="Agrega una descripción"
      />
      <button onClick={handleImage}>Enviar</button>
    </div>
  );
};