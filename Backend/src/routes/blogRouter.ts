import { verify } from "hono/jwt";
import { Hono } from "hono";

export const blogRouter=new Hono<{
    Bindings:{
        JWT_SECRET:string
    }
}>()

blogRouter.use('/*',async (c,next)=>{
    const header=c.req.header("Authorization") || ''
    const token=header.split('')[1]
    const jwt=await verify(token,c.env.JWT_SECRET)
    if(jwt.id){
        next()
    }
})