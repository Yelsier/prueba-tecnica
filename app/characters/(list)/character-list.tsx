import CharacterCard from "@/components/character-card";
import PaginationManager from "@/components/pagination-manager";

import { ICharacter } from "@/lib/api/characters";

type CharacterListProps = {
    characters: ICharacter[],
    prevPage: string | null,
    nextPage: string | null,
    page: number
    totalPages: number,
    filters?: { [key: string]: string }
}

const CharacterList: React.FC<CharacterListProps> = ({ characters, prevPage, nextPage, page, totalPages, filters }) => {

    return <>
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {characters.map((character) => {
                return <li key={character.id}><CharacterCard character={character} /></li>
            })}
        </ul>
        <div className="flex justify-center items-center mt-4 col-span-full">
            <PaginationManager baseUrl={`/characters?${new URLSearchParams(filters)}`} prevPage={prevPage} nextPage={nextPage} totalPages={totalPages} page={page} />
        </div>
    </>
}

export default CharacterList;