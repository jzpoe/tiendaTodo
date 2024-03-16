
import './image.css'
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
          text: response.data.message,
        });
         // Limpiar el input file después de subir la imagen
         setImage(null);
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
    <div className="image-upload-container">
      <div className="image-preview">
        {image && <img src={URL.createObjectURL(image)} alt="Preview" />}
      </div>
      <div className="image-form">
        <label htmlFor="image-upload" className="custom-file-upload">
          <i className="fas fa-cloud-upload-alt"></i> Selecciona una imagen
        </label>
        <input type="file" id="image-upload" onChange={handleImageChange} />
        <input
          type="text"
          value={description}
          onChange={uploadImageName}
          placeholder="Agrega una descripción"
          className="input-description"
        />
        <button onClick={handleImage} className="submit-button">Enviar</button>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};