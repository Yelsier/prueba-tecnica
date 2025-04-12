import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { CardItem } from "./character-view"


const LoadingCharacter = () => {

    return <Card className="sm:flex">
        <CardHeader>
            <Skeleton className="w-full min-w-[300px] aspect-square rounded-lg mb-4 block" />
            <CardTitle >
                <Skeleton className="w-full h-10 rounded-lg mb-2" />
            </CardTitle>
            <Skeleton className="w-full h-6 rounded-lg mb-2" />
        </CardHeader>
        <CardContent className="p-6 w-full">
            <CardDescription className="text-lg flex gap-4 flex-col">
                <CardItem title="Origin" value={<Skeleton className="w-full h-6 rounded-lg mb-2" />} />
                <CardItem title="Location" value={<Skeleton className="w-full h-6 rounded-lg mb-2" />} />
                <CardItem title="Species" value={<Skeleton className="w-full h-6 rounded-lg mb-2" />} />
                <CardItem title="Status" value={<Skeleton className="w-full h-6 rounded-lg mb-2" />} />
            </CardDescription>
        </CardContent>
    </Card>
}

export default LoadingCharacter