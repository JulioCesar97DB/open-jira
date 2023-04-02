
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
            description: 'Lorem ipsum dolor sit amet',
            status: 'pending',
            createdAt: Date.now(),

        },
        {
            description: 'Consectetur adipiscing elit',
            status: 'pending',
            createdAt: Date.now(),

        },
        {
            description: 'Sed do eiusmod tempor incididunt',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,

        },
        {
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,

        },
        {
            description: 'Excepteur sint occaecat ',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,

        },
        {
            description: 'Duis aute irure dolor in reprehenderit',
            status: 'finished',
            createdAt: Date.now() - 100000,

        },
    ]
}