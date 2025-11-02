import type { ICharacter } from "../interfaces/ICharacter";
import CharacterById from "../components/CharacterById";

interface CharacterByIdPageProps {
  characters: ICharacter[];
}


const CharacterByIdPage = ({ characters }: CharacterByIdPageProps) => {
  return (
    <>
      <CharacterById characters={characters} />
    </>
  )
}

export default CharacterByIdPage;