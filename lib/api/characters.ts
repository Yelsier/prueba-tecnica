import axios from "axios";

const API_BASEURL = "https://rickandmortyapi.com/api";

export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface ICharacterResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: ICharacter[];
}

export interface ICharacterFilters {
    name?: string;
    status?: string;
    species?: string;
    gender?: string;
}

export const getCharacters = async (page: number, filters?: ICharacterFilters) => {

    // Elimino los valores nulos o indefinidos de los filtros
    const filteredObject = Object.fromEntries(Object.entries(filters || {}).filter(([_, v]) => v != null));

    return (await axios.get<ICharacterResponse>(`${API_BASEURL}/character/?page=${page}&${new URLSearchParams(filteredObject)}`)).data;
}

export const getCharacterById = async (id: number) => {
    return (await axios.get<ICharacter>(`${API_BASEURL}/character/${id}`)).data;
}

export const getListOfCharactersById = async (ids: number[]) => {
    return (await axios.get<ICharacter[]>(`${API_BASEURL}/character/${ids.join(",")}`)).data;
}

export const getCharacterByName = async (name: string) => {
    return (await axios.get<ICharacterResponse>(`${API_BASEURL}/character/?name=${name}`)).data;
}