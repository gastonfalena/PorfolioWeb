import './projects.css';

export default function Projects() {
  return (
    <div className="container4">
      <h2 className="titleG">Mis Proyectos</h2>

      <div className="projectsWrapper">
        <div className="containerP">
          <div className="textP">
            <h3 className="titleP">Back Bazar</h3>
            <p>
            CRUD en Java con Spring Boot para un bazar. La API gestiona el control de stock y ventas, estructurándose en las entidades: Cliente, Producto, Venta y DetalleVenta.

El mayor desafío fue diseñar correctamente el diagrama de entidad-relación, asegurando que las relaciones en JPA fueran eficientes y evitando la recursión infinita con Jackson.
            </p>
          </div>
          <a href="https://github.com/gastonfalena/BackBazar" target="_blank" rel="noopener noreferrer">
                <img className="indieImg" src="backbazar.png" alt="gitback" />
            </a>
        </div>

        <div className="containerP">
          <div className="textP">
            <h3 className="titleP">Indie Impresiones</h3>
            <p>
            Página web estilo E-commerce. Para realizar este proyecto, aprendí Redux para manejar el estado global.
              Necesitaba que el carrito persistiera durante toda la experiencia del usuario. También integré WhatsApp
              para enviar pedidos desde el carrito, ya que mi cliente requería aprobarlos manualmente. Actualmente en construcción.
            </p>
          </div>
          <img className="indieImg" src="indie.png" alt="Proyecto 2" />
        </div>

        <div className="containerP">
          <div className="textP">
            <h3 className="titleP">TodoList</h3>
            <p>
              Descripción del segundo proyecto. Este es otro ejemplo de cómo se pueden mostrar diferentes proyectos 
              sin que queden pegados.
            </p>
          </div>
            <a href="https://todolistgf.netlify.app" target="_blank" rel="noopener noreferrer">
                <img className="indieImg" src="todolist.png" alt="todolist" />
            </a>
        </div>

        <div className="containerP">
          <div className="textP">
            <h3 className="titleP">Criptomonedas</h3>
            <p>
              Descripción del segundo proyecto. Este es otro ejemplo de cómo se pueden mostrar diferentes proyectos 
              sin que queden pegados.
            </p>
          </div>
          <img className="indieImg cripto" src="criptomonedas.png" alt="criptomonedas" />
        </div>
      </div>
    </div>
  );
}