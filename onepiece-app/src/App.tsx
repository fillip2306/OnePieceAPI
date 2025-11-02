import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { ICharacter } from "./interfaces/ICharacter";
import { HomePage, CharacterListPage, CharacterByIdPage, } from "./pages";
import characterService from "./services/characterService.ts";
import Navigation from "./shared/Navigation.tsx";

const App = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchCharacters = async () => {
    try {
      const data = await characterService.getAll();
      console.log(data);
      setCharacters(data);
    } catch (error) {
      console.error("Failed to fetch characters:", error);
    } finally {
      setLoading(false);
    }
  } 

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/characters"
            element={<CharacterListPage characters={characters} />}
          />
          <Route
            path="/characters/:id"
            element={<CharacterByIdPage characters={characters} />}
          />
          <Route
            path="/locations"
          />
          <Route
            path="*"
            element={<p>Page not found! <a href="/">Back to the home page</a></p>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
