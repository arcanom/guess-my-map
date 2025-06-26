import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import cryingCat from "../assets/tsj8l8ahuw431.webp";
import happyCat from "../assets/6a8308d8134147e4b2ef7b1c53e0b128.jpg";

const ThemeFinished = () => {
  const { theme } = useParams();
  const location = useLocation();
  const decodedTheme = decodeURIComponent(theme);
  const index = location?.state?.index ?? 0;
  const score = location?.state?.score ?? 0;
  const total = index * 2;

  const isLowScore = (score / total) * 100 < 50;

  return (
    <>
   
      <div className="flex items-center justify-between w-full px-4 mt-6 relative">
        <h2 className="text-white font-extrabold text-2xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)] absolute left-1/2 transform -translate-x-1/2">
          {decodedTheme}
        </h2>
      </div>

    
      <div className="flex justify-center mt-6 px-4">
        <div className="bg-customYellow p-6 m-5 rounded-xl w-full max-w-3xl flex flex-col items-center gap-6 border-2 border-black min-h-[600px]">

         
          <h3 className="text-white font-extrabold text-3xl text-center drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)]">
            Terminé !
          </h3>
          <p className="text-white font-extrabold text-2xl text-center drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)]">
            Votre score est de :
          </p>
          <p className="text-white font-extrabold text-4xl text-center drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)]">
            {score} / {total}
          </p>


          <div className="flex justify-center">
            <img
              src={isLowScore ? cryingCat : happyCat}
              alt={isLowScore ? "Crying cat" : "Happy cat"}
              className="max-w-xs rounded-lg shadow-lg"
            />
          </div>

      
          <Link to="/" className="w-full max-w-xs">
            <button className="mt-4 w-full bg-buttonGreen text-white font-bold px-4 py-2 rounded-xl shadow-sm border border-black transition">
              Retour à l'accueil
            </button>
          </Link>

        </div>
      </div>
    </>
  );
};

export default ThemeFinished;
