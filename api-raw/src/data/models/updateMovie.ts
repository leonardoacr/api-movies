import { openDb } from "../configs/configDB";

export async function updateMovie(movie: { title: string, release_year: number, genre: string }, receivedId: string) {
    const db = await openDb();

    const result = await db.exec(`
        UPDATE movies
        SET title = '${movie.title}', release_year = ${movie.release_year}, genre = '${movie.genre}'
        WHERE id = ${receivedId};
    `)
    return result
}
