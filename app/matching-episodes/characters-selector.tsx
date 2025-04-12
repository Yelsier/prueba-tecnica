"use client";
import CommandCustomFiltering from "@/components/combobox-filtering";
import { getCharacterByName } from "@/lib/api/characters";
import { useEffect, useState } from "react";

const CharactersSelector: React.FC<{ onBothSelect: (character1ID: number, character2ID: number) => void }> = ({ onBothSelect }) => {

    const [character1Id, setCharacter1Id] = useState<number>()
    const [character2Id, setCharacter2Id] = useState<number>()

    const filterCharacters = async (search: string) => {
        return (await getCharacterByName(search)).results.map((character) => ({ name: character.name, value: character.id.toString() }))
    }

    useEffect(() => {
        if (character1Id && character2Id) {
            onBothSelect(character1Id, character2Id)
        }
    }, [character1Id, character2Id])

    return <div className="flex  gap-4 ">
        <CommandCustomFiltering apiSearch={filterCharacters} onSelect={(value) => setCharacter1Id(Number(value))} />
        <CommandCustomFiltering apiSearch={filterCharacters} onSelect={(value) => setCharacter2Id(Number(value))} />
    </div>
}


export default CharactersSelector;
