import React from "react";
import players from "./players" ;
import Player from './Player' ;
import "bootstrap/dist/css/bootstrap.min.css";



function Playerslist() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Carte de mes Joueurs</h1>
      <div className="row justify-content-center">
        
        {players.map((player) => {
          // Si l'ID du joueur dans le JSON est 0, on affiche la carte vide (par défaut)
          if (player.id === 0) {
            return <Player key={player.id} />;
          }

          // Sinon, on affiche le vrai joueur avec toutes ses informations
          return (
            <Player 
              key={player.id}
              id={player.id}
              nom={player.nom}
              équipe={player.équipe}
              nationalité={player.nationalité}
              numéro_de_maillot={player.numéro_de_maillot}
              âge={player.âge}
              Image={player.Image}
            />
          );
        })}

      </div>
    </div>
  );
}

export default Playerslist;
