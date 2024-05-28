/*  import { defineDb, defineTable, column } from "astro:db";

// https://astro.build/db/config

const Comment = defineTable({
	columns: {
	  author: column.text(),
	  body: column.text(),
	},
  });

const Blogs = defineTable({
  columns: {
    title: column.text(),
    blogBody: column.text(),
    commentAuthor: column.text(),
    commentBody: column.text(),
  },
  foreignKeys: [
    {
      columns: ["commentAuthor", "commentBody"],
      references: () => [Comment.columns.author, Comment.columns.body],
    },
  ],
});


export default defineDb({
  tables: { Comment, Blogs },
});
 

 */

import { defineDb, defineTable, column } from "astro:db";

// Define the Comment table
const Comment = defineTable({
  columns: {
	id: column.number({ primaryKey: true }),
    author: column.text(),
    body: column.text(),
  },
});

// Define the Blogs table
const Blogs = defineTable({
  deprecated: true,
  columns: {
	id: column.number({ primaryKey: true }),
    title: column.text(),
    blogBody: column.text(),
	commentId: column.number({ references: () => Comment.columns.id }),
  },
});

// Export the database definition
export default defineDb({
  tables: { Comment, Blogs },
});
