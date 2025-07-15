import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { db } from "../../connection.ts";
import { schema } from "../../schema/index.ts";
import { z } from "zod/v4";
import { eq } from "drizzle-orm";

export const getRoomQuestionsRoute: FastifyPluginCallbackZod = (app) => {
    app.get("/rooms/:roomId/questions",
        {
            schema: {
                params: z.object({
                    roomId: z.string().uuid(),
                }),
            },
        },
        async (request) => {
            const { roomId } = request.params;

            const results = await db.select({
                id: schema.questions.id,
                question: schema.questions.question,
                answer: schema.questions.answer,
                createdAt: schema.questions.createdAt,
            }).from(schema.questions).where(eq(schema.questions.roomId, roomId)).orderBy(schema.questions.createdAt);

            return results;
        });
};