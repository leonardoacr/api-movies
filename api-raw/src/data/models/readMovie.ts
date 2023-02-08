import { openDb } from "../configs/configDB";

export async function readMovie(receivedId: string) {
    const db = await openDb();

    const result = await db.get(`
        SELECT * FROM movies
        WHERE id = ${receivedId};
    `)

    return result
}

export async function readMovies() {
    const db = await openDb();

    const result = await db.all(`
        SELECT * FROM movies;
    `)

    return result
}


