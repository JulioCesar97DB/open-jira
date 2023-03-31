
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
            description: 'Estudiar la documentacion de React',
            status: 'pending',
            createdAt: Date.now(),

        },
        {
            description: 'Curso de Next.js',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,

        },
        {
            description: 'Aprender HTML y CSS usando librerias como Bootstrap y tailwind',
            status: 'finished',
            createdAt: Date.now() - 100000,

        },
    ]
}