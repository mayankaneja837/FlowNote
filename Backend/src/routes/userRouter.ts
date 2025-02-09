import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {sign,verify} from 'hono/jwt'
import z from "zod"
export const userRouter=new Hono<{
    Bindings:{
        DATABASE_URL: string
        JWT_SECRET:string
    }
}>()

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const userSchema = await c.req.json()
  const body = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string().min(8)
  })

  const { success } = body.safeParse(userSchema)

  if (!success) {
    return c.json({
      message: "Invalid arguments"
    })
  }
  else {
    const user = await prisma.user.create({
      data: {
        name: userSchema.name,
        email: userSchema.email,
        password:userSchema.password
      }
    })
    
    const token = await sign({ id: user.id }, c.env.JWT_SECRET)
    return c.json({
      token: token
    })
  }

})

userRouter.post("/signin", async (c) => {
  const body=await c.req.json()
  const prisma=new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const user=await prisma.user.findFirst({
    where:{
      email:body.email,
      password:body.password
    }
  })
  if(!user){
    c.status(403)
    return c.json({
      message:"User doesn't exist"
    })
  }

  const token=await sign({
    id:user.id
  },c.env.JWT_SECRET)
  return c.json({
    token:token
  })
})
