This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Local dev setup

1. (recommended): Use vscode. Open from the .workspace file, not from the directory. Install the recommended plugins. This gives nice things like
   - Format on save
   - Local eslint server
   - Non-relative imports when autocompleting (@/_ rather than ../../_, etc.)
2. Use node 22.x
3. Open the directory and `npm install`
4. Setup Postgres+Prisma
   1. Have a postgresql server + database that you have admin access to. You probably want the server running locally, in which case install postgresql https://www.postgresql.org/ and setup a local server in e.g. pgAdmin
   2. Update the DATABASE_URL in `.env` to connect to your postgres server + database
   3. Run `npx prisma db push`. This sets up the database schema and generates the prisma javascript client in `src/(generated)/prismaClient`
   4. Run `npx prisma db seed`. This pushes seed data to your database
5. In page.tsx, set `const PROVIDER_ID` to the provider you want to be logged in as
6. `npm run dev` starts the app at [http://localhost:3000](http://localhost:3000)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
