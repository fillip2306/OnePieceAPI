import CharacterList from "../components/CharacterList";
import type { ICharacter } from "../interfaces/ICharacter";

interface CharacterListPageProps {
  characters: ICharacter[];
}

const CharacterListPage = ({ characters }: CharacterListPageProps) => {

  if (characters.length === 0) {
    return <p className="text-gray-600">No characters yet</p>;
  }

  return (
    <>
      <CharacterList characters={characters} />
    </>
  );
};

export default CharacterListPage;
