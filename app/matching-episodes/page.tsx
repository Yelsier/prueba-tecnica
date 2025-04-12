"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCharacterById, getCharacterByName } from "@/lib/api/characters";
import { NextPage } from "next";
import { use, useEffect, useState } from "react";
import CharactersSelector from "./characters-selector";
import { getListOfEpisodesById, IEpisode } from "@/lib/api/episodes";


const MatchingEpisodes: NextPage = () => {


    const [matchingEpisodes, setMatchingEpisodes] = useState<number[]>([])
    const [episodes, setEpisodes] = useState<IEpisode[]>([])


    const calculateMatchingEpisodes = async (character1Id: number, character2Id: number) => {
        const character1Data = await getCharacterById(character1Id)
        const character2Data = await getCharacterById(character2Id)
        const episodes1 = character1Data.episode.map((episode) => Number(episode.split("/").pop()))
        const episodes2 = character2Data.episode.map((episode) => Number(episode.split("/").pop()))

        setMatchingEpisodes(episodes1.filter((episode) => episodes2.includes(episode)))
    }

    useEffect(() => {

        if (matchingEpisodes.length === 0) return

        getListOfEpisodesById(matchingEpisodes).then((data) => {
            if (Array.isArray(data)) {
                setEpisodes(data)
            } else {
                setEpisodes([data])
            }
        })
    }, [matchingEpisodes])


    return <div>
        <CharactersSelector onBothSelect={calculateMatchingEpisodes} />
        <div className="flex flex-col gap-4 my-8">
            {matchingEpisodes.length > 0 ? <h2 className="text-xl">Matching Episodes:</h2> : null}
            <ul className="flex flex-wrap gap-4">
                {matchingEpisodes.map((episode) => {
                    return <li key={episode} className="text-lg">
                        <Card className="w-fit">
                            <CardHeader>
                                <CardTitle>
                                    Episode {episode}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {episodes.find((ep) => ep.id === episode)?.name}
                            </CardContent>
                        </Card>
                    </li>
                })}
            </ul>
        </div>
    </div>
}

export default MatchingEpisodes;