import { openDb } from "../configs/configDB";
import { movieSchema } from "../schemas/schemas";

export async function createMovie(movie: { title: string, release_year: number, genre: string }) {
    const db = await openDb();
    await movieSchema(db);
    const result = await db.exec(`
        INSERT INTO movies (title, release_year, genre)
        VALUES ('${movie.title}', ${movie.release_year}, '${movie.genre}');
    `)
    return result
}