import { PropsWithChildren } from "react";
import { Navbar } from "../Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            {children}
            <ToastContainer />
        </>
    )
}