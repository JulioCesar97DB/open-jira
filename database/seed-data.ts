
interface SeedData{
    entries: seedEntry[];
}

interface seedEntry {
    description: string;
    status: string;
    createdAt: number;
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'Pending: Lorem ipsum dolor sit amet consectetur',
            status: 'pending',
            createdAt: Date.now(),

        },
        {
            description: 'In-Progress: Adipisicing elit. Eveniet maiores eius eos',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,

        },
        {
            description: 'Eveniet maiores eius eos. Eligendi cupiditate dolorem modi quo reiciendis vel maiores tempora architecto odio non',
            status: 'finished',
            createdAt: Date.now() - 100000,

        },
    ]
}