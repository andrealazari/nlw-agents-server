import { fastify } from "fastify";
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod";
import { fastifyCors } from "@fastify/cors";
import { env } from "./env.ts";
import { getRoomsRoute } from "./db/http/routes/get-rooms.ts";
import { createRoomRoute } from "./db/http/routes/create-room.ts";
import { getRoomQuestionsRoute } from "./db/http/routes/get-room-questions.ts";
import { createQuestionRoute } from "./db/http/routes/create-question.ts";

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
app.register(createRoomRoute);
app.register(getRoomQuestionsRoute);
app.register(createQuestionRoute);

app.listen({ port: env.PORT });