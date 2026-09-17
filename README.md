# The Wild Oasis 🏡

A cabin booking website built with **Next.js (App Router)**, **Supabase**, and **Tailwind CSS**. Users can browse cabins and view detailed info for each one.

## Tech Stack

- Next.js (App Router)
- Supabase (database + storage)
- Tailwind CSS
- Heroicons

## Features

- Dynamic cabin detail pages (`/cabins/[cabinId]`)
- Optimized images with `next/image`
- Optimized fonts with `next/font/google`
- Loading and error states for each route
- Custom 404 page for missing cabins
- Fully responsive design

## Getting Started

\```bash
git clone <your-repo-url>
cd wild-oasis
npm install
npm run dev
\```

Open [http://localhost:3000](http://localhost:3000) to view it.

### Environment Variables

Create a `.env.local` file:

\```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_KEY=your_supabase_anon_key
\```

## What I Learned

- Next.js App Router file conventions (`loading.js`, `error.js`, `not-found.js`)
- Server vs Client Components
- Handling dynamic route params correctly
- Optimizing images and fonts with Next.js
- Building responsive layouts with Tailwind

## Roadmap

- [ ] Booking/reservation flow
- [ ] Authentication
- [ ] Payment integration
