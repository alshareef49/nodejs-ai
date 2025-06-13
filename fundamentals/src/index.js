import { OpenAI } from "openai";
import { Anthropic } from "@anthropic-ai/sdk";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
    apiKey: process.env.OPEN_ROUTER_API_KEY,
    baseURL: process.env.OPEN_ROUTER_BASE_URL

});

const prompt = "I need to start resisting training, suggest me routine under 500 words."

const response = await client.chat.completions.create({
    model: "mistralai/devstral-small:free",
    messages: [
        {
            role: "system",
            content: "You are a personal trainer",
        },
        {
            role: "user",
            content: prompt,
        },
    ],
    max_tokens: 500, 
});
console.log(response.choices[0].message.content);