import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormularioData from '../components/Formulario1';
import FormularioData2 from '../components/Formulario2';
import Resultado from '../components/Resultado'; 
import AdminLogin from '../components/AdminLogin';
import Inicio from '../components/Inicio';


const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/formularioEstudiante" element={<FormularioData />} />
        <Route path='/adminLogin' element={<AdminLogin />} />
        <Route path="/formularioPreguntas" element={<FormularioData2 />} />
        <Route path="/resultado" element={<Resultado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
