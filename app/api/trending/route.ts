import { NextResponse } from "next/server";
import { prisma } from "../client";

export async function GET(request: Request) {
    try {
        const trendingPosts = await prisma.post.findMany({
            orderBy: { views: 'desc' },
            take: 8
        });
        // Return the list of posts and HTTP status 200 to the client
        return new NextResponse(JSON.stringify(trendingPosts), { status: 200 });
    } catch (err) {
        console.log(err, 'request error');
        // Return error to the client
        return new NextResponse(JSON.stringify({ error: "Unable to fetch trending posts" }), { status: 500 });
    }
}


export async function handler(req: Request) {
    switch (req.method) {
        case 'GET':
            return await GET(req);
        default:
            return new NextResponse(null, { status: 405, headers: { 'Allow': 'GET' } });
    }
}
