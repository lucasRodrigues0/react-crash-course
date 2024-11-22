
export const getJobById = async ({ params }: any) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export const createNewJob = async (reqBody: any) => {
    
    const res = await fetch('/api/jobs', {
        method: 'POST',
        body: JSON.stringify(reqBody)
    });

    const data = await res.json();
    console.log(data);
}