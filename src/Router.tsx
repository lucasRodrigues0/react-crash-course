import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "./components/pages/Homepage";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { MainLayout } from "./components/layout/MainLayout";
import { JobsPage } from "./components/pages/JobsPage";
import { JobPage } from "./components/pages/JobPage";
import { getJobById } from "./service/Service";
import { AddJobPage } from "./components/pages/AddJobPage";

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
        path: '/jobs/:id',
        element: (
            <MainLayout>
                <JobPage />
            </MainLayout>
        ),
        loader: getJobById
    },
    {
        path: '/add-new',
        element: (
            <MainLayout>
                <AddJobPage />
            </MainLayout>
        )
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])
   