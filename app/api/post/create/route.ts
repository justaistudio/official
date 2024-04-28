// File: /pages/api/post/create.ts

import { NextResponse } from "next/server";
import { prisma } from "../../client";

export async function POST(request: Request) {
    try {
        const { title, content, category, image, author, snippet } = await request.json();

        if (!title || !content) {
            return NextResponse.json({ message: 'Title and content are required' }, { status: 400 });
        }

        const post = await prisma.post.create({
            data: {
                title,
                content,
                category,
                image,
                author,
                snippet // Adjust according to your data model
            },
        });

        return NextResponse.json(post, { status: 201 }); // Successfully created
    } catch (error: unknown) {
        console.error('Request error', error);
        return NextResponse.json({ error: 'Error creating post', message: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
    }
}
