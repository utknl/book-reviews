import { defineCollection, z } from 'astro:content';

const books = defineCollection({
    type: 'content',
    schema: z.object({
        // English Keys
        Book: z.string().optional(),
        Author: z.string().optional(),
        "How Much I liked it": z.string().optional(),
        "Ease of reading": z.string().optional(),
        "Year I read it": z.string().optional(),
        Tags: z.array(z.string()).optional(),
        FavoriteCharacter: z.string().optional(),

        // Turkish Keys
        Kitap: z.string().optional(),
        Yazar: z.string().optional(),
        "Ne Kadar Beğendim": z.string().optional(),
        "Okuma Kolaylığı": z.string().optional(),
        "Okuduğum Yıl": z.string().optional(),
        Etiketler: z.array(z.string()).optional(),
        "En sevdiğim karakter": z.string().optional(),
    })
});

export const collections = { books };
