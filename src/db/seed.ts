import { reset, seed } from "drizzle-seed";
import { db, sql } from "./connection.ts";
import { schema } from "./schema/index.ts";

// Reset the database
await reset(db, schema);

// Seed the database
await seed(db, schema).refine(f => {
    return {
        rooms: {
            count: 20,
            columns: {
                name: f.companyName(),
                description: f.loremIpsum(),
            },
        },
    }
});

await sql.end();

// biome-ignore lint/suspicious/noConsole: only for development
console.log("Database seeded successfully");