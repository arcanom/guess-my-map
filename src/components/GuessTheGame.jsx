import React, { useState } from "react";
import themes from "../assets/data/themes.json";
import { useNavigate, Link } from "react-router-dom";

const GuessTheGame = ({ theme, id, score: initialScore = 0, index: initialIndex = 0, jeux }) => {
  const navigate = useNavigate();
  let [score, setScore] = useState(initialScore);
  let [guess, setGuess] = useState("");
  let [index, setIndex] = useState(initialIndex);

  const decodedTheme = decodeURIComponent(theme);
  const currentJeu = jeux[index];
  const handleGuess = () => {
    const noms = Array.isArray(currentJeu.noms)
      ? currentJeu.noms.map((n) => n.toLowerCase().trim())
      : [currentJeu.noms.toLowerCase().trim()];

    const licence = Array.isArray(currentJeu.licence)
      ? currentJeu.licence.map((n) => n.toLowerCase().trim())
      : [currentJeu.licence.toLowerCase().trim()];
   
    const lowerGuess = guess.toLowerCase().trim();

    const bonneReponse = noms.includes(lowerGuess) || licence.includes(lowerGuess);

    if (bonneReponse) {
      const newScore = score + 1;
      const newIndex = index;
      setScore(newScore);

      navigate(`/${theme}/${id}/localisation`, {
        state: {
          score: newScore,
          index: newIndex,
          jeux: jeux,
        },
      });
    } else {
      navigate(`/${theme}/${id}/failed`,{
        state:{
          score: score,
          index: index,
          jeux: jeux,
        }
      })
    }
  };

  return (
    <>
<div className="flex items-center justify-between w-full px-4 mt-6 relative">
  <Link to="/">
    <button className="bg-corailRed text-white font-bold px-4 py-2 rounded-xl shadow-sm border border-black">
      Retour
    </button>
  </Link>

  <h2 className="text-white font-extrabold text-2xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)] absolute left-1/2 transform -translate-x-1/2">
    {decodedTheme}
  </h2>
</div>

<div className="flex justify-center mt-6 px-4">
  <div className="bg-customYellow p-6 m-5 rounded-xl w-full max-w-3xl flex flex-col gap-6 border-2 border-black min-h-[600px]">

   
    <div className="flex items-center px-4">
      <div className="flex-grow" />
      
      <p className="text-white font-extrabold text-2xl text-center drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)]">
        Jeu n°{parseInt(id)}
      </p>
      
      <div className="flex-grow text-right">
        <p className="text-white font-extrabold text-2xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)]">
          Score : {score}
        </p>
      </div>
    </div>

 
    <div className="flex justify-center">
      <img src={currentJeu.url} alt="" className="max-w-xl rounded-md" />
    </div>


    <div className="flex flex-col items-center gap-4 w-full max-w-xs mx-auto flex-grow">
      <label htmlFor="guess" className="font-semibold text-center text-white text-2xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)]">
        Le jeu ?
      </label>
      <input
        type="text"
        id="guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="border border-black px-3 py-2 rounded w-full"
      />
      <div className="mt-auto w-full">
        <button
          onClick={handleGuess}
          className="bg-buttonGreen text-white font-bold px-2 py-2 rounded border border-black transition w-full"
        >
          Valider
        </button>
      </div>
    </div>
  </div>
</div>

     
    </>
  );
};

export default GuessTheGame;
