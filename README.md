# Dashboard

A modern, responsive dashboard built with Vite, React/TypeScript, TailwindCSS, and Supabase.

## 🚀 Features

Responsive dashboard layout

Authentication & database powered by Supabase

TailwindCSS for styling

TypeScript support

ESLint & Prettier for code quality

Vite for fast development and build


## 🛠️ Tech Stack

Frontend: React, Vite, TypeScript

Styling: TailwindCSS

Backend/DB: Supabase

Build Tools: PostCSS, ESLint


## 📂 Project Structure

Dashboard-main/
 ├── public/            # Static assets
 ├── src/               # Main application code
 ├── supabase/          # Supabase config & setup
 ├── index.html         # Entry point
 ├── package.json       # Dependencies
 └── vite.config.ts     # Vite configuration

## ⚡ Getting Started

1. Clone the repo

git clone 
https://github.com/Sudarshanganwani9/Dashboard
cd Dashboard-main

2. Install dependencies

npm install
# or
bun install

3. Setup Environment

Create a .env file in the root directory and add your Supabase keys:

VITE_SUPABASE_URL=your-url
VITE_SUPABASE_ANON_KEY=your-anon-key

4. Run the app

npm run dev

5. Build for production

npm run build
