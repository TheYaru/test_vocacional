
const Inicio = () => {
  return (
    <div className="App">
    <h1 className='tittle'>TEST DE ORIENTACIÓN VOCACIONAL</h1>
    <p className='greeting'>¡Hola a todos!</p>
    <p className='description'>
        Nos complace mucho invitarlos a participar en una actividad que puede marcar una gran diferencia en su futuro académico y profesional: ¡el test de orientación vocacional! Como estudiantes de noveno grado, este es un momento clave para comenzar a pensar en qué dirección podrían querer tomar en su carrera técnica.<br></br>
        <br></br>
            El test de orientación vocacional es una herramienta diseñada para ayudarles a descubrir sus intereses, fortalezas y preferencias. Al aplicar este test, podrán obtener una visión más clara sobre qué áreas de la media técnica se alinean mejor con sus habilidades y aspiraciones. Esto no solo les permitirá tomar decisiones más informadas, sino que también les ayudará a encontrar una carrera que realmente les apasione.<br></br>
        <br></br>
        Participar en este test es un paso importante para planificar su futuro y asegurarse de que elijan un camino que les entusiasme y les motive. No es solo un cuestionario, sino una oportunidad para conocerse mejor y explorar opciones que quizás no habían considerado antes.
        </p>
        <div className='button-container' >
        <a href="/formularioEstudiante" style={{ padding: "0.8em", background: "#c30000", textDecoration: "none", marginBottom: "2em",  border: "1px solid #e5e5e5", borderRadius:"8px", color: "white" }}>Comenzar</a>
    </div>

  </div>
  )
}

export default Inicio