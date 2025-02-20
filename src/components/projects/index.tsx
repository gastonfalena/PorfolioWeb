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
                <img className="indieImg" src="backbazar.png" alt="backbazar" />
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
              <a href="https://github.com/gastonfalena/IndieImpresiones" target="_blank" rel="noopener noreferrer">
                <img className="indieImg" src="indie.png" alt="Indie foto" />
              </a>
         
        </div>

        <div className="containerP">
          <div className="textP">
            <h3 className="titleP">Palindrome-SN</h3>
            <p>
            Biblioteca sencilla disponible en npm para verificar si una cadena o número es un palíndromo.
            Ignora mayúsculas y espacios en las cadenas.
            </p>
            
          </div>
            <a href="https://www.npmjs.com/package/palindrome-sn" target="_blank" rel="noopener noreferrer">
              <img className="indieImg" src="palindrome.png" alt="palindrome" />
            </a>
         
        </div>
       
        <div className="containerP">
          <div className="textP">
            <h3 className="titleP">TodoList</h3>
            <p>
              Aplicación de lista de tareas que permite gestionar pendientes en diferentes categorías como oficina, hogar, deportes y otras.
              Almacena los datos de manera persistente utilizando LocalStorage, permitiendo que las tareas se mantengan incluso al cerrar la aplicación.
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
            Aplicación web intuitiva para consultar el tipo de cambio de múltiples criptomonedas en tiempo real, 
            utilizando datos de una API externa.
            </p>
          </div>
              <a href="https://criptomonedasgf.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img className="indieImg" src="criptomonedas.png" alt="criptomonedas" />
              </a>
        </div>
      </div>
    </div>
  );
}