import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "./components/pages/Homepage";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { MainLayout } from "./components/layout/MainLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <MainLayout>
                <Homepage />
            </MainLayout>
        )
            
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])
   