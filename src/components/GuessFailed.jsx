import React from "react";
import { useLocation, Link, useNavigate, useParams } from "react-router-dom";

const GuessFailed = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, id } = useParams();

  const decodedTheme = decodeURIComponent(theme);
  const jeux = location?.state?.jeux || [];
  const score = location?.state?.score ?? 0;
  const index = location?.state?.index ?? 0;

  const currentJeu = jeux[index];

  const nextGuess = () => {
    navigate(`/${theme}/${parseInt(id) + 1}`, {
      state: {
        score,
        index: index + 1,
        jeux,
      },
    });
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
            <p className="font-semibold text-center text-white text-2xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)]">
              Dommage
            </p>
          <p className="font-semibold text-center text-white text-2xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)]">
             C'était <strong>
              {Array.isArray(currentJeu.noms)
                ? currentJeu.noms[0]
                : currentJeu.noms}
           </strong>{" "}
            à <strong>
             {Array.isArray(currentJeu.localisation)
              ? currentJeu.localisation[0]
              : currentJeu.localisation}
             </strong>
          </p>
          </div>

          <div>
            <button
              className="bg-buttonGreen text-white font-bold px-2 py-2 rounded border border-black transition w-full"
              onClick={nextGuess}
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuessFailed;
