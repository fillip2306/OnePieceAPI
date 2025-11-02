import type { ICharacter } from "../interfaces/ICharacter";

const CharacterCard = ({ id, name, age, livingStatus, imageUrl }: ICharacter) => {
  return (
    <article className="text-center bg-gray-200 ">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-auto rounded mb-3 object-cover"
      />
      <h3 className="font-bold">Id {id}: {name}</h3>
      <p className={livingStatus ? "text-green-600" : "text-red-600"}>
        {livingStatus ? "Living" : "Dead"}
      </p>
      <p>{age} years old</p>
    </article>
  )
}

export default CharacterCard;

