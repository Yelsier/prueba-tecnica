import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Characters",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex flex-col items-center justify-center min-h-screen p-4 max-w-[1200px] mx-auto">
        {children}
    </div>
}

export default Layout;