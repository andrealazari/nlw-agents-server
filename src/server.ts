import { fastify } from "fastify";
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod";
import { fastifyCors } from "@fastify/cors";
import { env } from "./env.ts";
import { getRoomsRoute } from "./db/http/routes/get-rooms.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

// CORS
app.register(fastifyCors, {
    origin: "http://localhost:5173",
});

// Type provider
app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

// Routes
app.get("/health", () => {
    return 'OK';
});

app.register(getRoomsRoute);

app.listen({ port: env.PORT });