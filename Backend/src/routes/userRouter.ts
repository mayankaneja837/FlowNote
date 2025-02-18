import { Hono } from "hono";
import {PrismaClient} from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate";
import {sign } from 'hono/jwt'
import { signupInput,signinInput} from "@mayankaneja837/flownote-common";


export const userRouter=new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET:string
  }
}>()

userRouter.post('/signup',async(c)=>{
  const prisma=new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const body=await c.req.json()
  const success=signinInput.safeParse(body)

  try{if(success){
    const user=await prisma.user.create({
      data:{
        name:body.name,
        email:body.email,
        password:body.password
      }
    })
    const jwt=await sign({id:user.id},c.env.JWT_SECRET)
    return c.json({
      token:jwt
    })

  } else{
    return c.json({
      message:"Invalid arguments"
    })
  }
  } catch(e){
    console.log(e)
  }
  
})

userRouter.post("/signin", async (c) => {
  const body=await c.req.json()
  const prisma=new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const {success}=signinInput.safeParse(body)
  if(!success){
    c.status(411)
    return c.json({
      message:"Inputs entered are incorrect"
    })
  }
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