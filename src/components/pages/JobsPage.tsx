import { JobListings } from "../JobListings"

export const JobsPage = () => {
    return (
        <section className="bg-blue-50 px-4 py-6">
            <JobListings isHome={false}/>
        </section>
    )
}