"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

const CharactersFilter = () => {

    const [gender, setGender] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [species, setSpecies] = useState<string>("")

    const handleFilterSubmit = () => {

        const queryObject: { [key: string]: string } = {}

        if (gender) {
            queryObject["gender"] = gender
        }

        if (name) {
            queryObject["name"] = name
        }

        if (species) {
            queryObject["species"] = species
        }

        window.location.replace(`/characters?${new URLSearchParams(queryObject)}`)
    }

    return <div className="flex gap-4">

        <Input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Search by name" className="w-full" />
        <Input value={species} onChange={(e) => setSpecies(e.target.value)} type="text" placeholder="Search by specie" className="w-full" />
        <Select onValueChange={(value) => setGender(value)} defaultValue={gender}>
            <SelectTrigger >
                <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Gender</SelectLabel>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
        <Button onClick={handleFilterSubmit}>Search</Button>
    </div>

}

export default CharactersFilter