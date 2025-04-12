import { getCharacters } from "@/lib/api/characters";
import CharacterList from "./character-list";
import { NextPage } from "next";
import CharactersFilter from "./characters-filter";

const Home: NextPage<{ searchParams: { page: number, name?: string, status?: string, species?: string, gender?: string } }> = async ({ searchParams }) => {

    const page = !isNaN(searchParams.page) ? Number(searchParams.page) : 1;

    const filters: { [key: string]: string } = {}

    if (searchParams.name) {
        filters["name"] = searchParams.name
    }

    if (searchParams.status) {
        filters["status"] = searchParams.status
    }

    if (searchParams.species) {
        filters["species"] = searchParams.species
    }

    if (searchParams.gender) {
        filters["gender"] = searchParams.gender
    }

    const charactersResponse = await getCharacters(page, filters).catch((error) => {
        return {
            results: [],
            info: {
                count: 0,
                pages: 0,
                next: null,
                prev: null
            }
        }
    })

    return <div className="flex flex-col gap-4">
        <CharactersFilter />
        <CharacterList
            characters={charactersResponse.results}
            nextPage={charactersResponse.info.next}
            prevPage={charactersResponse.info.prev}
            page={page}
            totalPages={charactersResponse.info.pages}
            filters={filters}
        />
    </div>
}

export default Home;