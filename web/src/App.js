import React from "react";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

// Componente: Bloco isolado de HTML, Css e Js, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componete PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente (Lembrar: Imutabilidade)

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/3787328?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Wander Marques</strong>
                <span>ReactJs, React Native, Node.js</span>
              </div>
            </header>
            <p>Developer | Angular | C# .NET | Tech lead</p>
            <a href="https://github.com/wanderwmarques">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/3787328?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Wander Marques</strong>
                <span>ReactJs, React Native, Node.js</span>
              </div>
            </header>
            <p>Developer | Angular | C# .NET | Tech lead</p>
            <a href="https://github.com/wanderwmarques">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/3787328?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Wander Marques</strong>
                <span>ReactJs, React Native, Node.js</span>
              </div>
            </header>
            <p>Developer | Angular | C# .NET | Tech lead</p>
            <a href="https://github.com/wanderwmarques">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/3787328?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Wander Marques</strong>
                <span>ReactJs, React Native, Node.js</span>
              </div>
            </header>
            <p>Developer | Angular | C# .NET | Tech lead</p>
            <a href="https://github.com/wanderwmarques">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
