import { Hono } from 'hono'
import z from "zod"

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post("api/v1/signup",(c)=>{
  
  const email=c.req.param('email')
  const name=c.req.param('name')

  const body=z.object({
    name:z.string(),
    email:z.string()
  })

  const {success}=body.safeParse(body)

  return c.text("signup route")
})


export default app
