import { Hono } from "hono";
import { renderer } from "./renderer";
import Blog from "./pages/Blog";
import type { Post } from "./data";
import { console, D1Database } from "@cloudflare/workers-types";

const app = new Hono<{
  Bindings: {
    db: D1Database;
  };
}>();

app.use(renderer);

app.get("/:slug", async (c) => {

  const db = c.env.db;
  const { slug } = c.req.param();
  
  // Fetch the blog post from the database
  const post = await db.prepare("SELECT * FROM posts WHERE slug = ?")
    .bind(slug)
    .first<Post>();
  if (!post) {
    return c.text("Post not found", 404);
  }
  
  return c.render(<Blog post={post} />);
});

export default app;
