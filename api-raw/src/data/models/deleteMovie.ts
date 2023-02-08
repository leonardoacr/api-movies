import { openDb } from "../configs/configDB";

export async function deleteMovie(receivedId: string) {
    const db = await openDb();

    const result = await db.exec(`
        DELETE FROM movies
        WHERE id = ${receivedId};
    `)

    return result
}