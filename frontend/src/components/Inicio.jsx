import { useNavigate } from 'react-router-dom';
import { FaBook, FaLightbulb, FaBullseye} from 'react-icons/fa'; 
import '../../public/styles/inicio.css';

const Inicio = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/formularioEstudiante');
  };

  return (
    <div className="App">
      <div className="inicio-container">
        <div className="background" />
        
        <div className="content"> 
          <div className="header">
            <h1 className="title">¡PREPÁRATE PARA TU FUTURO!</h1>
            <p className="subtitle">Descubre tus intereses con el Test de Orientación Vocacional</p>
          </div>

          <div className="info-cards">
            <div className="card">
              <FaBook className="icon" />
              <h2>¿Por qué es importante?</h2>
              <p>
                Como estudiantes de noveno grado, este es un momento clave para pensar en tu carrera técnica.
              </p>
            </div>

            <div className="card">
              <FaLightbulb className="icon" />
              <h2>Descubre tus intereses</h2>
              <p>
                El test te ayudará a conocer tus intereses, fortalezas y preferencias para tomar decisiones informadas.
              </p>
            </div>

            <div className="card">
              <FaBullseye className="icon" />
              <h2>Llegó el momento de hacerlo</h2>
              <p>
                Es tu oportunidad para conocerte mejor y explorar opciones que quizás no habías considerado antes.
              </p>
            </div>


          </div>

          <div className="button-container">
            <button onClick={handleStart} className="start-button">
              Comenzar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
