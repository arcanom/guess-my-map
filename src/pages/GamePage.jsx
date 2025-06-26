import React from "react";
import { useParams, useLocation } from "react-router-dom";
import themes from "../assets/data/themes.json";
import GuessTheGame from "../components/GuessTheGame";
import GuessTheLocation from "../components/GuessTheLocation";
import GuessFailed from "../components/GuessFailed";
import ThemeFinished from "../components/ThemeFinished";

const GamePage = () => {
  const { theme, id } = useParams();
  const decodedTheme = decodeURIComponent(theme);
  const game = themes.find((th) => th.nom === decodedTheme);

  const location = useLocation();
  const { score = 0, index = 0, error = false } = location.state || {};

  if (!game) {
    return <p>Thème introuvable.</p>;
  }

  if (location.pathname.includes("failed")) {
    return (
      <GuessFailed
        theme={decodedTheme}
        id={id}
        jeux={game.jeux}
        score={score}
        index={index}
      />
    );
  }

  if (location.pathname.includes("localisation")) {
    return (
      <GuessTheLocation
        theme={decodedTheme}
        id={id}
        jeux={game.jeux}
        score={score}
        index={index}
      />
    );
  }

if(index >= game.jeux.length ){
    return(
         <ThemeFinished
       theme={decodedTheme}
        id={id}
        jeux={game.jeux}
        score={score}
        index={index} />
        
    );
   
}

  return (
    <GuessTheGame
      theme={decodedTheme}
      id={id}
      jeux={game.jeux}
      score={score}
      index={index}
    />
  );
};

export default GamePage;