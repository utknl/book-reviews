# Book Reviews Archive

A minimalist, bilingual (English/Turkish) book review site built with **Astro** and **Tailwind CSS**.

## � Project Structure

```text
├── src/
│   ├── content/
│   │   └── books/
│   │       ├── en/          # English book reviews (.md)
│   │       └── tr/          # Turkish book reviews (.md)
│   ├── layouts/
│   │   └── Layout.astro     # Main shell (Header, Nav, Theme Toggle)
│   ├── pages/
│   │   ├── [lang]/
│   │   │   ├── index.astro  # Book listing page (/en or /tr)
│   │   │   └── [slug].astro # Detail view for a single book
│   │   └── index.astro      # Redirects root / to /en
│   ├── styles/
│   │   └── global.css       # Tailwind imports & Custom Font (JetBrains Mono)
│   └── utils/
│       └── book.ts          # Helper to normalize EN/TR data fields
└── astro.config.mjs         # Astro configuration
```

## 📖 How to Add a New Book

1.  Create a new Markdown file in `src/content/books/en/` (for English) or `src/content/books/tr/` (for Turkish).
2.  Use the filename as the ID (e.g., `0003.md`).
3.  Add the frontmatter at the top of the file:

**English Example (`src/content/books/en/0003.md`):**
```markdown
---
Book: "The Stranger"
Author: "Albert Camus"
How Much I liked it: "9/10"
Ease of reading: "8/10"
Year I read it: "2025"
Tags: ["philosophy", "classic"]
FavoriteCharacter: "Meursault"
---

Your review content goes here...
```

**Turkish Example (`src/content/books/tr/0003.md`):**
```markdown
---
Kitap: "Yabancı"
Yazar: "Albert Camus"
Ne Kadar Beğendim: "9/10"
Okuma Kolaylığı: "8/10"
Okuduğum Yıl: "2025"
Etiketler: ["felsefe", "klasik"]
En sevdiğim karakter: "Meursault"
---

İnceleme yazınız buraya...
```

The site will automatically pick up the new file and add it to the list.

## 🛠 Technical Details

### 1. Unified Data Model (`utils/book.ts`)
Since the English and Turkish files use different keys (e.g., `Book` vs `Kitap`), we use a helper function `mapBook()` to convert them into a single consistent format for the UI.

### 2. Theming
-   **Font**: JetBrains Mono (configured in `src/styles/global.css`).
-   **Dark Mode**: A custom dark gray (`#121212`) is used instead of pure black for a softer look.
-   **Icons**: Technical Sun/Moon icons are substituted with emojis `☀️` and `🌑` via CSS toggling in `Layout.astro`.

### 3. Deployment
-   **GitHub Pages**: A workflow file is at `.github/workflows/deploy.yml`.
-   **Base Path**: Configured in `astro.config.mjs` as `/book-reviews`. If you deploy to a custom root domain later, remove the `base` property.

## 🚀 Running Locally

```bash
npm install
npm run dev
```
