import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import Link from "next/link";


const Home: NextPage = () => {


    return <>
        <h1 className="text-5xl mb-12">Rick and Morty Explorer</h1>
        <div className="flex flex-wrap gap-4">
            <Link href="/characters">
                <Button variant="default">Characters</Button>
            </Link>
            <Link href="/matching-episodes">
                <Button variant="default">Find matching episodes</Button>
            </Link>
        </div>
    </>

}

export default Home;