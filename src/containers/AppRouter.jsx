import { Route, Routes } from "react-router-dom";
import AccueilNotLogged from '../pages/AccueilNotLogged.jsx'
import GamePage from '../pages/GamePage.jsx';
function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<AccueilNotLogged />}/>
            <Route path="/:theme/:id" element={<GamePage />} />
            <Route path="/:theme/:id/localisation" element={<GamePage />} />
            <Route path="/:theme/:id/failed" element={<GamePage />} />
            <Route path="/:theme/finished" element={<GamePage />} />
        </Routes>
    )
}

export default AppRouter;