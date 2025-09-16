import { useParams } from "react-router-dom";
import albumes from "./productos.js";

function Detalle() {
  const { id } = useParams();
  const producto = albumes.find((prod) => prod.id === parseInt(id));

  if (!producto) return <h2>El producto no existe</h2>;

  return (
    <div>
      <h2>Detalle del álbum</h2>
      <h2>{producto.name}</h2>
      <h3>{producto.group}</h3>
      <p>{producto.description}</p>
      <h3>${producto.price}</h3>
    </div>
  );
}

export default Detalle;
