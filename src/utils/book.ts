import type { CollectionEntry } from 'astro:content';

export interface Book {
    title: string;
    author: string;
    rating: string;
    easeOfReading: string;
    yearRead: string;
    tags: string[];
    favoriteCharacter: string;
    slug: string;
    lang: 'en' | 'tr';
    originalEntry: CollectionEntry<'books'>;
}

export function mapBook(entry: CollectionEntry<'books'>): Book {
    const { data, slug, id } = entry;
    // id is likely "en/0001.md" or "tr/0001.md"
    // slug is usually "en/0001" or "tr/0001"
    const lang = id.startsWith('tr/') ? 'tr' : 'en';

    if (lang === 'en') {
        return {
            title: data.Book || 'Untitled',
            author: data.Author || 'Unknown',
            rating: data["How Much I liked it"] || 'N/A',
            easeOfReading: data["Ease of reading"] || 'N/A',
            yearRead: data["Year I read it"] || 'N/A',
            tags: data.Tags || [],
            favoriteCharacter: data.FavoriteCharacter || 'N/A',
            slug,
            lang,
            originalEntry: entry,
        };
    } else {
        return {
            title: data.Kitap || 'Başlıksız',
            author: data.Yazar || 'Bilinmiyor',
            rating: data["Ne Kadar Beğendim"] || 'N/A',
            easeOfReading: data["Okuma Kolaylığı"] || 'N/A',
            yearRead: data["Okuduğum Yıl"] || 'N/A',
            tags: data.Etiketler || [],
            favoriteCharacter: data["En sevdiğim karakter"] || 'N/A',
            slug,
            lang,
            originalEntry: entry,
        };
    }
}
