import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "./components/pages/Homepage";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { MainLayout } from "./components/layout/MainLayout";
import { JobsPage } from "./components/pages/JobsPage";

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
        path: '/jobs',
        element: (
            <MainLayout>
                <JobsPage />
            </MainLayout>
        )
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])
   