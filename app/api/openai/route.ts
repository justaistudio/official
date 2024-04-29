import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request: Request) {
    try {
        const { title, role } = await request.json();
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo-0125',
            messages: [
                {role: "user", content: `Create 3 line blog post in plain text based on this title: ${title}`},
                {role: "system", content: `${role || "I am a helpful assistant"}`}
            ],
            // response_format: { type: "json_object" },
        });

        // Ensure to return the response to the client
        return NextResponse.json({ content: completion.choices[0].message.content }, { status: 200 });
    } catch (err) {
        console.error('Request error', err);
        // Return error response to the client
        return NextResponse.json({ error: "Error processing request", details: err }, { status: 500 });
    }
}
