import { AllJobs } from "./AllJobs"
import { Hero } from "./hero"
import { HomeCards } from "./HomeCard"
import { JobListings } from "./JobListings"
import { Navbar } from "./navbar"

export const Homepage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <HomeCards />
            <JobListings />
            <AllJobs />
        </>
    )
}