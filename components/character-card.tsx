import { ICharacter } from "@/lib/api/characters";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

export const CharacterCardSkeleton = () => {
    return <Card className="w-full h-full flex flex-col rounded-lg ">
        <CardHeader className="w-full">
            <Skeleton className="w-full aspect-square rounded-lg mb-4 block" />
            <Skeleton className="w-full h-6 rounded-lg mb-2" />
            <Skeleton className="w-[50%] h-6 rounded-lg mb-2" />
        </CardHeader>
    </Card>
}

const CharacterCard: React.FC<{ character: ICharacter }> = ({ character }) => {

    return <Link href={"/characters/" + character.id}>
        <Card className="w-full h-full flex flex-col rounded-lg cursor-pointer">
            <CardHeader>
                <img src={character.image} alt={character.name} className="w-full  object-cover rounded-lg mb-4 aspect-square" />
                <CardTitle><h2>{character.name}</h2></CardTitle>
                <CardDescription><p >{character.species}</p></CardDescription>
            </CardHeader>
            <CardContent>
                <Button>See more</Button>
            </CardContent>
        </Card>
    </Link>
}

export default CharacterCard;