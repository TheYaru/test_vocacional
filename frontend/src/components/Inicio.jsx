import '../../public/styles/inicio.css';

const Inicio = () => {

  return (
    <div className="App">
      <div className="inicio-container">
        {/* Imagen en la parte superior */}
        <div className="image-container">
          <img 
            src="https://raw.githubusercontent.com/TheYaru/test_vocacional/main/frontend/public/images/ImagenInicio.jpg" 
            alt="Imagen de inicio"
            className="background-img"
          />
        </div>

       
        <div className='content'>
          <h1 className='title'>TEST DE ORIENTACIÓN VOCACIONAL</h1>
          <p className='description'>Prepárate para descubrir tus intereses y fortalezas.</p>
          
          <div className='button-container'>
            <a href="/formularioEstudiante" className="start-button">
              Comenzar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
