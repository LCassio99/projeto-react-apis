import { Routes, Route } from "react-router-dom";
import LayoutPage from "../layouts";
import HomePage from "../pages/home";
import PokedexPage from "../pages/pokedex";
import ErrorPage from "../pages/error";
import PokeDetails from "../pages/pokeDetails";
import { HashRouter } from "react-router-dom";

const Router = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<HomePage />} />
            <Route path="/pokedex" element={<PokedexPage />} />
            <Route path="/pokemon/:name" element={<PokeDetails />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default Router;
