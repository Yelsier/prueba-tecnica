import { NavigationMenu, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { NavigationMenuItem } from "./ui/navigation-menu"
import Link from "next/link"
import { Separator } from "./ui/separator"
import ThemeToggler from "./theme-toggler"

const Header = () => {
    return <header className="bg-background fixed top-0 left-0 w-full z-10">
        <NavigationMenu>
            <NavigationMenuList className="max-w-[1200px] mx-auto flex items-center gap-8 p-4">
                <NavigationMenuItem >
                    <Link href="/">Home</Link>
                </NavigationMenuItem>
                <NavigationMenuItem >
                    <Link href="/characters">Characters</Link>
                </NavigationMenuItem>
                <NavigationMenuItem >
                    <Link href="/matching-episodes">Find matching episodes</Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="ml-auto">
                    <ThemeToggler />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        <Separator />
    </header>
}

export default Header