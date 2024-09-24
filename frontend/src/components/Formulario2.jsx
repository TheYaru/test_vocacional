import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para redirigir
import '../../public/styles/formulario2.css';

function Formulario2() {
  const [respuestas, setRespuestas] = useState({
    pregunta1: '',
    pregunta2: '',
    pregunta3: '',
    pregunta4: '',
    pregunta5: '',
    pregunta6: '',
    pregunta7: '',
    pregunta8: '',
    pregunta9: '',
  });

  const navigate = useNavigate(); // Inicializamos navigate para redirigir

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRespuestas((prevRespuestas) => ({
      ...prevRespuestas,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Contamos cuántas veces se seleccionó cada opción (1 a 6)
    const conteoRespuestas = {};
    Object.values(respuestas).forEach((respuesta) => {
      conteoRespuestas[respuesta] = (conteoRespuestas[respuesta] || 0) + 1;
    });

    // Obtenemos el número de respuesta más seleccionado
    const respuestaMasSeleccionada = Object.keys(conteoRespuestas).reduce(
      (a, b) => (conteoRespuestas[a] > conteoRespuestas[b] ? a : b)
    );

    // Redirigimos a la página de resultados y pasamos el número más seleccionado
    navigate(`/resultado`, { state: { respuestaMasSeleccionada } });
  };

  const toggleMenu = () => {
    document.body.classList.toggle('open');
  };


  return (
    <div className="formulario">
      
      <header className="navbar">
        <div className="logo">
          <a href="https://www.fesc.edu.co" target="_blank" rel="noopener noreferrer">
            <img
              id="logo"
              src="https://www.fesc.edu.co/portal/images/logo.png"
              alt="Logo FESC"
              className="img1"
            />
          </a>
        </div>
        <nav>
          <button className="menu-toggle" onClick={toggleMenu}>
            &#9776;
          </button>
        </nav>
      </header>

      <div className='formdiv'>
      
      <form onSubmit={handleSubmit}>
        
        <div id="seccion1" className="section">
          <h2>Sección 1: Intereses Personales</h2>
          <label>
            1. ¿Qué te gusta hacer en tu tiempo libre?
            <select
              name="pregunta1"
              value={respuestas.pregunta1}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="1">Dibujar y crear diseños visuales.</option>
              <option value="2">Explorar estilos de moda y tendencias.</option>
              <option value="3">Resolver problemas con tecnología y software.</option>
              <option value="4">Leer sobre negocios y comercio internacional.</option>
              <option value="5">Administrar dinero y planificar presupuestos.</option>
              <option value="6">Organizar eventos y conocer nuevas culturas.</option>
            </select>
          </label>

          <label>
            2. ¿Qué tipo de actividades disfrutas más?
            <select
              name="pregunta2"
              value={respuestas.pregunta2}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="1">Crear gráficos y editar fotos.</option>
              <option value="2">Diseñar ropa y accesorios.</option>
              <option value="3">Programar y desarrollar aplicaciones.</option>
              <option value="4">Negociar y aprender sobre mercados globales.</option>
              <option value="5">Manejar finanzas y analizar datos económicos.</option>
              <option value="6">Planear viajes y actividades turísticas.</option>
            </select>
          </label>

          <label>
            3. ¿Cuál de las siguientes materias te interesa más?
            <select
              name="pregunta3"
              value={respuestas.pregunta3}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="1">Arte y Diseño.</option>
              <option value="2">Textiles y Moda.</option>
              <option value="3">Tecnología e Informática.</option>
              <option value="4">Economía y Comercio.</option>
              <option value="5">Matemáticas y Contabilidad.</option>
              <option value="6">Geografía y Cultura.</option>
            </select>
          </label>
        </div>

        
        <div id="seccion2" className="section">
          <h2>Sección 2: Habilidades</h2>
          <label>
            4. ¿Qué te gusta hacer en tu tiempo libre?
            <select
              name="pregunta4"
              value={respuestas.pregunta4}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="1">Dibujar y crear diseños visuales.</option>
              <option value="2">Explorar estilos de moda y tendencias.</option>
              <option value="3">Resolver problemas con tecnología y software.</option>
              <option value="4">Leer sobre negocios y comercio internacional.</option>
              <option value="5">Administrar dinero y planificar presupuestos.</option>
              <option value="6">Organizar eventos y conocer nuevas culturas.</option>
            </select>
          </label>

          <label>
            5. ¿Qué tipo de actividades disfrutas más?
            <select
              name="pregunta5"
              value={respuestas.pregunta5}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="1">Crear gráficos y editar fotos.</option>
              <option value="2">Diseñar ropa y accesorios.</option>
              <option value="3">Programar y desarrollar aplicaciones.</option>
              <option value="4">Negociar y aprender sobre mercados globales.</option>
              <option value="5">Manejar finanzas y analizar datos económicos.</option>
              <option value="6">Planear viajes y actividades turísticas.</option>
            </select>
          </label>

          <label>
            6. ¿Cuál de las siguientes materias te interesa más?
            <select
              name="pregunta6"
              value={respuestas.pregunta6}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="1">Arte y Diseño.</option>
              <option value="2">Textiles y Moda.</option>
              <option value="3">Tecnología e Informática.</option>
              <option value="4">Economía y Comercio.</option>
              <option value="5">Matemáticas y Contabilidad.</option>
              <option value="6">Geografía y Cultura.</option>
            </select>
          </label>
        </div>

        
        <div id="seccion3" className="section">
          <h2>Sección 3: Preferencias de Estudio y Trabajo</h2>
          <label>
            7. ¿Cómo prefieres trabajar?
            <select
              name="pregunta7"
              value={respuestas.pregunta7}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="1">De forma independiente, en proyectos de diseño gráfico.</option>
              <option value="2">En equipo, creando nuevas tendencias en moda.</option>
              <option value="3">Tanto de forma independiente como en equipo, desarrollando software.</option>
              <option value="4">
                En un entorno dinámico y global, interactuando con personas de diferentes culturas.
              </option>
              <option value="5">En un ambiente estructurado, gestionando finanzas.</option>
              <option value="6">
                En un entorno interactivo, organizando y gestionando experiencias turísticas.
              </option>
            </select>
          </label>

          <label>
            8. ¿Te gustaría viajar o trabajar en el extranjero?
            <select
              name="pregunta8"
              value={respuestas.pregunta8}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="1">
                No es mi prioridad, prefiero enfocarme en mi trabajo creativo.
              </option>
              <option value="2">Me gustaría, especialmente para explorar nuevas tendencias de moda.</option>
              <option value="3">
                Podría considerar trabajar en proyectos de tecnología en otros países.
              </option>
              <option value="4">Definitivamente, me interesa mucho el comercio internacional.</option>
              <option value="5">
                Solo si es necesario para mejorar mis habilidades financieras.
              </option>
              <option value="6">
                Sí, me encanta la idea de viajar y trabajar en el sector turístico.
              </option>
            </select>
          </label>

          <label>
            9. ¿Te interesaría emprender tu propio negocio?
            <select
              name="pregunta9"
              value={respuestas.pregunta9}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="1">Sí, un estudio de diseño gráfico.</option>
              <option value="2">Sí, una línea de moda propia.</option>
              <option value="3">Sí, una empresa de desarrollo de software.</option>
              <option value="4">Sí, una empresa de comercio internacional.</option>
              <option value="5">Sí, una firma de consultoría financiera.</option>
              <option value="6">
                Sí, una agencia de viajes o una empresa en la industria turística.
              </option>
            </select>
          </label>
        </div>

        <div className="botonEnviar">
          <button type="submit">Enviar</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Formulario2;