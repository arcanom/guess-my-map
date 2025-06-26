import React from "react";
import themes from "../assets/data/themes.json";
import ThemeCard from "../components/ThemeCard";

const AccueilNotLogged = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center" >
        <h2 className="text-white font-extrabold text-2xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)]">Accueil</h2>
      </div>
      <div className="pt-10 flex justify-center ">
        <div className="bg-customYellow p-6 rounded-xl max-w-screen-lg w-full flex justify-center flex-wrap gap-5 border-2 border-black border-solid">
          {themes.map((theme) => (
            <ThemeCard
              key={theme.id}
              nom={theme.nom}
              nombreDeJeu={theme.nombreDeJeu}
              image={theme.font}
            />
          ))}
       </div>
    </div>
   
    </>
  );
};

export default AccueilNotLogged;