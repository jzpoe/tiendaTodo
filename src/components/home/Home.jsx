
import './home.css'
import axios from "axios"
import { useEffect, useState } from "react"


export const Home = () => {

const [imagenGet, setImagenGet] =useState([])

useEffect(()=>{
  const renderImagen = async ()=>{

    try {
      
      const response = await axios.get('http://localhost:3000/api/render');
      console.log(response)
        setImagenGet(response.data)
    

    } catch (error) {
      console.error('Error al obtener las imágenes:', error);
    }
  }
    renderImagen()
  
},[])



  return (
    <div className="container-image">
      <h1>imagenes</h1>

        <div className="image-grid">
          {imagenGet.map((imagen)=>(
<img key={imagen._id} src={`http://localhost:3000/${imagen.imageUrl}`} alt={imagen.description}  className="image-item"/>
            )) }
        </div>


    </div>
  )
}
