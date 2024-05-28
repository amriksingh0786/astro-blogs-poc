import { db, Comment, Blogs } from "astro:db";

export default async function seed() {
  console.log("Seeding data");
  await db.insert(Comment).values([
    { id: 1, author: "amrik", body: "Hope you like Astro DB!" },
    { id: 2, author: "aman", body: "Enjoy!" },
  ]);
  await db.insert(Blogs).values([
    {
      id: 1,
      title: "First Blog",
      blogBody: "This is my first blog",
      commentId: 1,
      /*  commentAuthor: "amrik",
      commentBody: "Hope you like Astro DB!", */
    },
    {
      id: 2,
      title: "Second Blog",
      blogBody: "This is my second blog",
      commentId: 2,
      /*       commentAuthor: "aman",
      commentBody: "Enjoy!", */
    },
  ]);

  //   console.log("db", Comment);

  // Seed local development data.
  // See https://docs.astro.build/en/guides/astro-db/#seed-your-database
}
