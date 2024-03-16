

import "./home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const Home = () => {
  const [imagenGet, setImagenGet] = useState([]);

  const renderImagen = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/render");
      console.log(response);
      setImagenGet(response.data);
    } catch (error) {
      console.error("Error al obtener las imágenes:", error);
    }
  };

  useEffect(() => {
    renderImagen();
  }, []); // Empty dependency array to run only once when component mounts

  const handleEliminarImagen = async (id) => {
    try {
      const result = await Swal.fire({
        icon: "warning",
        title: "¿Está seguro que desea eliminar la imagen?",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        const response = await axios.delete(`http://localhost:3000/api/delete/${id}`);
        Swal.fire({
          icon: "success",
          title: "¡Imagen eliminada!",
          text: response.data.message,
        });
        // Actualizar la lista de imágenes después de eliminar
        renderImagen();
      }
    } catch (error) {
      console.error('Error al eliminar la imagen:', error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al eliminar la imagen",
      });
    }
  };

  return (
    <div className="container-image">
      <div className="image-grid">
        {imagenGet.map((imagen) => (
          <div key={imagen._id} className="image-item-container">
            {/* Utiliza la URL relativa del servidor para la imagen */}
            <img src={`http://localhost:3000/${imagen.imageUrl}`} alt={imagen.description} className="image-item" />
            <p>{imagen.description}</p>
            <button onClick={() => handleEliminarImagen(imagen._id)} className="delete-button">Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};