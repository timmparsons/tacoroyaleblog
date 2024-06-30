import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
  schema:({ image }) => 
    z.object({
    title: z.string(),
    author: z.string(),
    date: z.string(),
    image: image()
  })
})

export const collections = {
  posts: postCollection
}
