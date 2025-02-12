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

export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signupInput>
export type BlogInput = z.infer<typeof blogInput>
export type BlogUpdate = z.infer<typeof blogUpdate>