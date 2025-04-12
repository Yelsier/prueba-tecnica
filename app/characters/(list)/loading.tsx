import { CharacterCardSkeleton } from "@/components/character-card";


const LoadingCharacters = () => {

    return <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {Array.from({ length: 20 }).map((_, index) => {
            return <li key={index}><CharacterCardSkeleton /></li>
        })}
    </ul>
}

export default LoadingCharacters;