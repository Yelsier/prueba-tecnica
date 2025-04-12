import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ICharacter } from "@/lib/api/characters";

export const CardItem: React.FC<{ title: string, value: React.ReactNode }> = ({ title, value }) => {
    return <Card className="w-full ">
        <CardHeader>
            <CardTitle>
                <h2 className=""><b>{title}</b></h2>
            </CardTitle>
        </CardHeader>
        <Separator className="mb-4" />
        <CardContent>
            <p>{value}</p>
        </CardContent>
    </Card>
}

const CharacterView: React.FC<{ character: ICharacter }> = ({ character }) => {

    return <Card className="sm:flex">
        <CardHeader>
            <img src={character?.image} alt={character?.name} className="rounded-lg shadow-lg min-w-[300px] mb-4" />
            <CardTitle >
                <h1 className="text-4xl">{character?.name}</h1>
            </CardTitle>
            <p className="text-foreground">First seen in episode {character?.episode[0].split("/").slice(-1)[0]}</p>
        </CardHeader>
        <CardContent className="p-6 w-full">
            <CardDescription className="text-lg flex gap-4 flex-col">
                <CardItem title="Origin" value={character.origin.name} />
                <CardItem title="Gender" value={character.gender} />
                <CardItem title="Location" value={character.location.name} />
                <CardItem title="Species" value={character.species} />
                <CardItem title="Status" value={character.status} />
            </CardDescription>
        </CardContent>
    </Card>
}

export default CharacterView;