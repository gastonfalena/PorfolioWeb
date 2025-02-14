import './header.css'
export default function Header() {
  return (
    <div className='container'>
        <div className='item'><img className='imagen' src='/Me.png' alt='Gastón Falena'/></div>
        <div>
        <div className='item name'>Gastón Falena</div>
        <div className='item talent'>Desarrollador de Sofwtare</div>
        </div>
        
        
        {/* <div className='item'>¡Hola! Soy Gastón Falena, desarrollador de software especializado en tecnologías web. Estudio Ingeniería en Sistemas de Información y me especializo en React, TypeScript y Java con Spring, además del diseño de arquitecturas backend. Siempre estoy explorando nuevas tecnologías y mejores prácticas para crear aplicaciones modernas, seguras y de alto rendimiento.</div> */}
    </div>
    
  )
}
