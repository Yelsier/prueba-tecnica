import { NextPage } from "next";
import CharacterView from "./character-view";
import { getCharacterById } from "@/lib/api/characters";


const CharacterPage: NextPage<{ params: { id: number } }> = async ({ params }) => {

    const character = await getCharacterById(params.id);

    return <CharacterView character={character} />
}

export default CharacterPage;