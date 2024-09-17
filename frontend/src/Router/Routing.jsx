import {BrowserRouter, Route, Routes} from 'react-router-dom'
import FormularioData from '../components/Formulario'
import Inicio from '../components/Inicio'
const Routing = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<Inicio/>} path='/'/>
        <Route element={<FormularioData/>} path='/formularioEstudiante'/>
      </Routes>
    </BrowserRouter>


  )
}

export default Routing