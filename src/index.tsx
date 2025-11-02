import { Hono } from 'hono'
import { renderer } from './renderer'
import App from './App'
import Blog from './pages/Blog'
import { testPost } from './data'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(<Blog post={testPost} />)
})

export default app
