import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import { MovieProvider } from "./contexts/MovieFavContext";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </main>
      </MovieProvider>
    </>
  );
}
