import { Link } from "react-router-dom";

function Producto({ id, name, group, description, price }) {
  return (
    <div className="card">
      <Link to={`/productos/${id}`}>
        <h2>{name}</h2>
        <h3>{group}</h3>
        <p>{description}</p>
        <strong>${price}</strong>
      </Link>
    </div>
  );
}

export default Producto;
