import { Route, Routes } from "react-router-dom";
import AccueilNotLogged from '../pages/AccueilNotLogged.jsx'
import GamePage from '../pages/GamePage.jsx';
import Inscription from "../pages/Inscription.jsx";
import Connexion from "../pages/Connexion.jsx";
function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<AccueilNotLogged />}/>
            <Route path="/:theme/:id" element={<GamePage />} />
            <Route path="/:theme/:id/localisation" element={<GamePage />} />
            <Route path="/:theme/:id/failed" element={<GamePage />} />
            <Route path="/:theme/finished" element={<GamePage />} />
            <Route path="/inscription" element={<Inscription />}/>
            <Route path="/connexion" element={<Connexion />} />
        </Routes>
    )
}

export default AppRouter;