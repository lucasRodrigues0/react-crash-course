import { PropsWithChildren } from "react";
import { Navbar } from "../navbar";

export const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}