import React, {useState, useEffect} from 'react';

function DevForm({ onSubmit }) {

  // Função que é disparada toda vez que uma informação é alterada ou 1 unica vez apos a renderização do componente
  // 2 parametros, 1 => qual função precisa executar e 2 =>  quanto sera executado.
  const [github_username, setGithubUsermame] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleSumbmit(e) {
    e.preventDefault(); // Previnindo o comportamento padrão
    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    });

    setGithubUsermame('');
    setTechs('');
  }

  return (
    <form onSubmit={handleSumbmit}>
      <div className="input-block">
        <label htmlFor="github_username">Usuário do Github</label>
        <input
          name="github_username"
          id="github_username"
          required
          value={github_username}
          onChange={e => setGithubUsermame(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          name="techs"
          id="techs"
          required
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            name="latitude"
            id="latitude"
            value={latitude}
            required
            onChange={e => setLatitude(e.target.value)} // pego o evento do HTML (e) e também o input e o valor digitado nele
          />
        </div>
        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            name="longitude"
            id="longitude"
            value={longitude}
            required
            onChange={e => setLongitude(e.target.value)} // pego o evento do HTML (e) e também o input e o valor digitado nele
          />
        </div>
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
}

export default DevForm;
