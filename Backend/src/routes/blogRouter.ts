import { verify } from "hono/jwt";
import { Hono } from "hono";
import { Prisma, PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { blogInput, blogUpdate } from "@mayankaneja837/flownote-common";

export const blogRouter=new Hono<{
    Bindings:{
        DATABASE_URL:string
        JWT_SECRET:string
    },
    Variables:{
        userId:string
    }
}>()

blogRouter.use('/*',async (c,next)=>{
    const autheader=c.req.header("Authorization") || ''
    
    try{
        const jwt=await verify(autheader,c.env.JWT_SECRET)
        if(jwt){
            c.set("userId" ,jwt.id as string)
            await next()
        } else{
            c.status(411)
            return c.json({
                message:"User does not exist"
            })
        }
    } catch(e){
        console.log(e)
        c.status(411)
        return c.json({
            message:"Error while verifying the jwt"
        })
    }


})

blogRouter.post('/submit',async (c)=>{
    const body=await c.req.json()
    const userId=c.get("userId")
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const {success}=blogInput.safeParse(body)
    if(!success){
        c.status(411)
        return c.json({
            message:"Inputs enetered are incorrect"
        })
    }
    const blog=await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:userId,
        }
    })

    return c.json({
        id:blog.id
    })
})

blogRouter.put("/update",async (c)=>{


    const body=await c.req.json()

    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    
    const {success}=blogUpdate.safeParse(body)

    try{
        if(!success){
            c.status(411)
            return c.json({
                message:"Inputs entered are incorrect"
            })
        }
        await prisma.post.update({
            where:{
                id:body.id
            },
            data:{
                title:body.title,
                content:body.content
            }
        })
    
        return c.json({
            message:"Blog updated!"
        })
    } catch(error){
        console.log(error)
    }
    
})

blogRouter.get("/bulk",async(c)=>{

    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blog=await prisma.post.findMany({})
    return c.json({
        blog
    })
})

blogRouter.get("/:id",async (c)=>{
    const id= c.req.param("id")
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try{
        const blog=await prisma.post.findFirst({
            where:{
                id:id
            }
        })
        return c.json({
            blog
        })
    } catch(e){
        console.log(e)
        c.status(403)
        return c.json({
            message:"Post with the given id does not exist !"
        })
    }

})

