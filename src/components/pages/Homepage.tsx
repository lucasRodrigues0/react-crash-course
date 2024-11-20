import { AllJobs } from "../AllJobs"
import { Hero } from "../hero"
import { HomeCards } from "../HomeCard"
import { JobListings } from "../JobListings"

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