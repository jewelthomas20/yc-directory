This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Progress So Far

- Initialized the project using `create-next-app`.
- Initialized next-auth [`npm install next-auth@beta`=>`npx auth secret` ]
- created auth.js file and added handlers for auth login[github]
- created OAuth in github account and stored github id and secret in env
- created root group and moved page.tsx into it and created a new layout.tsx
- created /app/api/auth/[...nextauth]/route.ts. 
- created Navbar and used SignIn and Signout with form trigerring server action for signin and out

<!-- Styling and tailwind configuration -->
- Took config code from git(tailwind v3) and applied to global.css(tailwind v4 - our project)
-  installed these and imported into global.css @plugin "@tailwindcss/typography"; @import "tw-animate-css";
- Downloaded fonts and added to app, made changes to the layout.tsx for fonts and defined root fonts


- setted up sanity schema inside schemaTypes and added to index.ts[schematypes]
- npm install sanity-plugin-markdown for schema defination, markdownSchema() inside sanity.config.ts           
- updated the structutre.ts inside sanity 
- npx sanity@latest schema extract --path=./sanity/extract.json// ran this to get sample of current schema

<!-- Fetching and type check -->

- created queries.ts inside sanity>lib which uses sanity GROQ queries 
- updated fetch in root/page.tsx to fetch live data
- updated scripts in package.json so that types could be generated for schema which will be used for typecheck for queries from frontend.
- updated type checks needed in certain comps

<!-- Live fetch -->

- npm i server-only// to run specific flow on the server only
- used sanity live api to fetch data on upload of new
- created live.ts file and updated root/page.tsx

