import { Hono } from "hono";
import { renderer } from "./renderer";
import Blog from "./pages/Blog";
import type { Post } from "./types/post";
import { D1Database } from "@cloudflare/workers-types";
import NotFound from "./pages/NotFound";

const app = new Hono<{
  Bindings: {
    db: D1Database;
  };
}>();

app.use(renderer);

app.get("/", c => c.render(<NotFound />));

app.get("/:slug", async (c) => {
  const db = c.env.db;
  const { slug } = c.req.param();

  const post = await db
    .prepare("SELECT * FROM posts WHERE slug = ?")
    .bind(slug)
    .first<Post>();
  if (!post) {
    return c.render(<NotFound />);
  }

  return c.render(<Blog post={post} />);
});

export default app;
