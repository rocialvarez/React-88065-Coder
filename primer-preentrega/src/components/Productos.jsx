import Producto from "./Producto.jsx";
import albumes from "./productos.js";
import "./styles.css";

function Productos() {
  return (
    <div id="container">
      {albumes.map((prod) => (
        <Producto key={prod.id} {...prod} />
      ))}
    </div>
  );
}

export default Productos;
