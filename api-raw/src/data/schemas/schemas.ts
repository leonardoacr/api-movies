import { Database } from "sqlite";

export async function movieSchema(db: Database) {
    await db.exec(`
        CREATE TABLE IF NOT EXISTS movies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            release_year INTEGER NOT NULL,
            genre TEXT NOT NULL
        );
    `)
}