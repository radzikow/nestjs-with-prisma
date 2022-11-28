# NestJS project integrated it with Prisma, PostgreSQL and Swagger
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

// .env
```
DATABASE_URL="postgres://myuser:mypassword@localhost:5432/median-db"
```

Find out how PostgreSQL connection URL string should be format [here](https://www.prisma.io/docs/concepts/database-connectors/postgresql#connection-url).

### Migrate the database
With the Prisma schema defined, you will run migrations to create the actual tables in the database. To generate and execute your first migration, run the following command in the terminal:
```
npx prisma migrate dev --name "init"
```

### Execute seeding
```
npx prisma db seed
```