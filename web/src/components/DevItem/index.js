import React from "react";
import './styles.css';

// function DevItem([dev]) { // Desestruturação como parametro 
function DevItem(props) {
  console.log(props)
  const { dev } = props;
  console.log(dev)

  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt="" />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(", ")}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>
        {" "}
        Acessar perfil no Github{" "}
      </a>
    </li>
  );
}


export default DevItem;