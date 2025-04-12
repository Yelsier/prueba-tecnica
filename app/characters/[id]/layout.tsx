import { getCharacterById } from "@/lib/api/characters";

export const generateMetadata = async ({ params }: { params: { id: number } }) => {
    const character = await getCharacterById(params.id);
    return {
        title: character.name,
    };
}

const Layout = ({ children }: { children: React.ReactNode }) => {
    return children
}

export default Layout;