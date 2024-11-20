import { PropsWithChildren } from "react";
import { Navbar } from "../Navbar";

export const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}