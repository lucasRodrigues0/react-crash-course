import { useState, useEffect } from 'react';
import { Listing } from './Listing';
import { Loader } from './Loader';

export const JobListings = ({ isHome = false }: Props) => {

    const [jobs, setJobs] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const uri = isHome ? 'http://localhost:8000/jobs?_limit=3' : 'http://localhost:8000/jobs';
        const fetchJobs = async () => {
            try {
                const res = await fetch(uri, { method: 'GET' });
                const data = await res.json();
                setJobs(data);
            } catch (error) {
                console.log('error', error);
            } finally {
                setLoading(false);
            }
        }
        fetchJobs();
    }, []);

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Recent Jobs' : 'All Jobs'}
                </h2>
                {
                    loading ? (
                        <Loader loading={loading} />
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {
                                jobs.map((job: any) => {
                                    return (
                                        <Listing job={job} key={job.id} />
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>
        </section>
    );
}

type Props = {
    isHome: boolean
}