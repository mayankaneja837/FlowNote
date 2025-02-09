import { Hono } from 'hono'
import z from "zod"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {sign,decode,verify} from 'hono/jwt'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET:string
  }
}>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post("api/v1/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const userSchema = await c.req.json()
  const body = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string().min(8)
  })

  const { success } = userSchema.safeParse(body)

  if (!success) {
    return c.json({
      message:"Invalid arguments"
    })
  }
  else {
    const user = await prisma.user.create({
      data: {
        name: userSchema.name,
        email: userSchema.email,
        password: userSchema.password
      }
    })

    const token=sign({id:user.id},c.env.JWT_SECRET)
    return c.json({
      token:token
    })
  }
  
})

app.post("/api/v1/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())
  const body = await c.req.json()
  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
      password: body.password
    }
  })
  if (!user) {
    return c.text("Invalid arguments")
  }
})

export default app
