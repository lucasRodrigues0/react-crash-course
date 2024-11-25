
export const getJobById = async ({ params }: any) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export const createNewJob = async (reqBody: any) => {

    await fetch('/api/jobs', {
        method: 'POST',
        body: JSON.stringify(reqBody)
    });
}

export const deleteJob = async (id: number) => {

    await fetch(`/api/jobs/${id}`, {
        method: 'DELETE'
    })

}