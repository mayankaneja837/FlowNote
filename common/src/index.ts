import z from "zod"

export const signupInput = z.object({
    name: z.string().optional(),
    email: z.string().email(),
    password: z.string().min(8)
})


export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})


export const blogInput = z.object({
    title: z.string(),
    content: z.string()
})


export const blogUpdate = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()
})

export type signupInput = z.infer<typeof signupInput>
export type signinInput = z.infer<typeof signupInput>
export type blogInput = z.infer<typeof blogInput>
export type blogUpdate = z.infer<typeof blogUpdate>