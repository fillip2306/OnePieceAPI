import { useState } from "react";
import type { ICharacter } from "../interfaces/ICharacter";
import CharacterItem from "./CharacterCard";

interface CharactersByIdProps {
  characters: ICharacter[];
}

const CharacterById = ({ characters }: CharactersByIdProps) => {
  const [searchId, setSearchId] = useState("");
  const [foundCharacter, setFoundCharacter] = useState<ICharacter>();

  const handleSearch = () => {
    const idAsNumber = Number(searchId);

    if (isNaN(idAsNumber)) {
      setFoundCharacter(undefined);
    }

    // filtrer (bruker map-lignende logikk)
    const result = characters.find((m) => m.id === idAsNumber);
    setFoundCharacter(result);
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold mb-4">Find Character by ID</h2>

      <div className="flex justify-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter ID..."
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {foundCharacter ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            <CharacterItem key={foundCharacter.id} {...foundCharacter} />

        </div>
      ) : (
        <p className="text-gray-500">No character found.</p>
      )}
    </div>
  );
}

export default CharacterById;
