# NestJS project integrated with Prisma, PostgreSQL and Swagger

Code based on the [official Prisma course](https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0).


## Some info learnt during the course
### Initialize Prisma

To get started, first install the Prisma CLI as a development dependency. The Prisma CLI will allow you to run various commands and interact with your project.
```
npm install -D prisma
```

You can initialize Prisma inside your project by running:
```
npx prisma init
```
This will create a new prisma directory with a schema.prisma file. This is the main configuration file that contains your database schema. This command also creates a .env file inside your project.

### Set your environment variable
Inside the .env file, you should see a DATABASE_URL environment variable with a dummy connection string. Replace this connection string with the one for your PostgreSQL instance.

```
// .env
DATABASE_URL="postgres://myuser:mypassword@localhost:5432/median-db"
```
Find out how PostgreSQL connection URL string should be format [here](https://www.prisma.io/docs/concepts/database-connectors/postgresql#connection-url).

### Understand the Prisma schema
If you open prisma/schema.prisma, you should see the following default schema:

```
// prisma/schema.prisma
generator client { provider = "prisma-client-js" }
datasource db { provider = "postgresql" url = env("DATABASE_URL") }
```

This file is written in the Prisma Schema Language, which is a language that Prisma uses to define your database schema. The schema.prisma file has three main components:

**Data source**: Specifies your database connection. The above configuration means that your database provider is PostgreSQL and the database connection string is available in the DATABASE_URL environment variable.
**Generator**: Indicates that you want to generate Prisma Client, a type-safe query builder for your database. It is used to send queries to your database.
**Data model**: Defines your database models. Each model will be mapped to a table in the underlying database. Right now there are no models in your schema, you will explore this part in the next section.

### Migrate the database
With the Prisma schema defined, you will run migrations to create the actual tables in the database. To generate and execute your first migration, run the following command in the terminal:
```
npx prisma migrate dev --name "init"
```

This command will do three things:

1. Save the migration: Prisma Migrate will take a snapshot of your schema and figure out the SQL commands necessary to carry out the migration. Prisma will save the migration file containing the SQL commands to the newly created prisma/migrations folder.
2. Execute the migration: Prisma Migrate will execute the SQL in the migration file to create the underlying tables in your database.
3. Generate Prisma Client: Prisma will generate Prisma Client based on your latest schema. Since you did not have the Client library installed, the CLI will install it for you as well. You should see the @prisma/client package inside dependencies in your package.json file. Prisma Client is a TypeScript query builder auto-generated from your Prisma schema. It is tailored to your Prisma schema and will be used to send queries to the database.

### Execute seeding
```
npx prisma db seed
```
