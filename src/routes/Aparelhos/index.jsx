import React from "react";
import { Link } from "react-router-dom";
import { listaAparelhos } from "../../components/listaAparelhos";
import "../../App.css"; // Importe seu arquivo CSS de estilo

export default function Aparelhos() {
  return (
    <main>
      <h1>୨⎯ lista de aparelhos ⎯୧</h1>
      <ul className="aparelhos-list">
        {listaAparelhos.map((aparelho) => (
          <li key={aparelho.id} className="aparelho-item">
            <h2>{aparelho.modelo}</h2>
            <p>{aparelho.marca}</p>
            <p>{aparelho.descricao}</p>
            <img src={aparelho.Image} alt={`Imagem de ${aparelho.modelo}`} width={100}/>
            <p>R$ {aparelho.preco.toFixed(2)}</p>
            <div key={aparelho.id}>
            <Link to={`/VisualizarAparelho/editar/${aparelho.id}`}>detalhes ˚ ༘♡ ⋆｡˚</Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
