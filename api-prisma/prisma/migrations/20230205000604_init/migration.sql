-- CreateTable
CREATE TABLE "Movies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "release_year" TEXT NOT NULL,
    "genre" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Movies_title_key" ON "Movies"("title");
