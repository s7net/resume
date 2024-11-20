# Resume Template

![CleanShot 2024-11-14 at 16 25 21@2x](https://github.com/user-attachments/assets/db375335-04d7-4041-8156-c5dab1928f35)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbrijr%2Fresume&project-name=resume&repository-name=resume&redirect-url=https%3A%2F%2Fgithub.com%2Fbrijr%2Fresume&demo-title=Next.js%2015%20Resume%20Template%20&demo-url=https%3A%2F%2Fresume.bridger.to)

A minimalist, responsive resume template built with Next.js 15, TypeScript, and Tailwind CSS. Perfect for developers and designers who want to showcase their work in a clean, professional format.

🔗 [Live Demo](https://resume.bridger.to)

## Features

- 🚀 Built with Next.js 15 (App Router)
- 💨 Tailwind CSS for styling
- 📱 Fully responsive design
- 📄 PDF download functionality
- 📋 Copy-to-clipboard for contact information
- 🎨 Customizable content through simple content files
- 🖨 Print-friendly styling

## Getting Started

1. Clone this repository:

```bash
git clone https://github.com/brijr/resume
cd resume
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view your resume

## Customization

### Content

Edit your resume content in `/lib/content.ts`. The content is structured in sections:

- Intro (personal information)
- Work Experience
- Education
- Projects
- Open Source Contributions

### Styling

- Main styles are in `app/globals.css`
- Print-specific styles are in `app/print.css`
- The template uses Tailwind CSS for styling - customize the theme in `tailwind.config.ts`

### PDF Download

1. Place your PDF version in the `public` directory
2. Update the `pdfUrl` prop in `app/page.tsx` to point to your PDF file

## Deployment

Deploy your resume site using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbrijr%2Fresume&project-name=resume&repository-name=resume&redirect-url=https%3A%2F%2Fgithub.com%2Fbrijr%2Fresume&demo-title=Next.js%2015%20Resume%20Template%20&demo-url=https%3A%2F%2Fresume.bridger.to)

## License

MIT License - Feel free to use this template for your own resume!

Created by [Bridger Tower](https://bridger.to)
