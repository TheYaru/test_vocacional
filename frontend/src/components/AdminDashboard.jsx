import { useState } from 'react';
import '../../public/styles/dashboard.css';

function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [schoolFilter, setSchoolFilter] = useState('');
  const [profileFilter, setProfileFilter] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSchoolFilter = (e) => {
    setSchoolFilter(e.target.value);
  };

  const handleProfileFilter = (e) => {
    setProfileFilter(e.target.value);
  };

  const responses = [
    { name: 'Estudiante 1', school: 'Colegio A', profile: 'Artístico' },
    { name: 'Estudiante 2', school: 'Colegio B', profile: 'Científico' },
    // Más respuestas aquí
  ];

  const filteredResponses = responses.filter((response) => {
    return (
      response.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (schoolFilter ? response.school === schoolFilter : true) &&
      (profileFilter ? response.profile === profileFilter : true)
    );
  });

  return (
    <div className="dashboard-container">
      <h1>Panel de Administración</h1>

      <div className="filter-container">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select value={schoolFilter} onChange={handleSchoolFilter}>
            <option value="COMFANORTE">COMFANORTE</option>
            <option value="JULIO PEREZ FERRERO">JULIO PEREZ FERRERO</option>
            <option value="SANTA CECILIA">SANTA CECILIA</option>
            <option value="SANTISIMA TRINIDAD">SANTISIMA TRINIDAD</option>
            <option value="CLARETIANO">CLARETIANO</option>
            <option value="JUAN ATALAYA">JUAN ATALAYA</option>
            <option value="ORIENTAL 26">ORIENTAL 26</option>
        </select>

        <select value={profileFilter} onChange={handleProfileFilter}>
          <option value="">Todos los perfiles</option>
          <option value="Gráfico">Gráfico</option>
          <option value="Modas">Modas</option>
          <option value="Software">Software</option>
          <option value="Negocios">Negocios</option>
          <option value="Financiero">Financiero</option>
          <option value="Turismo">Turismo</option>
        </select>
        <button>Filtrar</button>
      </div>

      <div className="responses">
        {filteredResponses.map((response, index) => (
          <div key={index} className="response-card">
            <p><strong>Nombre:</strong> {response.name}</p>
            <p><strong>Colegio:</strong> {response.school}</p>
            <p><strong>Perfil:</strong> {response.profile}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
