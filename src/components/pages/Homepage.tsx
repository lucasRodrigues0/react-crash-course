import { AllJobs } from "../shared/AllJobs"
import { Hero } from "../shared/hero"
import { HomeCards } from "../shared/HomeCard"
import { JobListings } from "../shared/JobListings"

export const Homepage = () => {
    return (
        <>
            <Hero />
            <HomeCards />
            <JobListings isHome={true} />
            <AllJobs />
        </>
    )
}