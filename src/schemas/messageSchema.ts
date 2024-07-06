import {z} from 'zod'

export const signInSchema = z.object({
   content:z
   .string()
   .min(10, {message: 'cpntent must be at least of 10 characters'})
   .max(300,{message: 'cpntent must be no longer than 300 character'})
})