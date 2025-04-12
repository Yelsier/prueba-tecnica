const API_BASEURL = "https://rickandmortyapi.com/api";

import axios from "axios";

export interface IEpisode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}

export const getListOfEpisodesById = async (ids: number[]) => {
    return (await axios.get<IEpisode[] | IEpisode>(`${API_BASEURL}/episode/${ids.join(",")}`)).data;
}