
import type { APIRoute } from "astro";
import { getEntry } from "astro:content";


export const prerender = false;

export const GET:APIRoute = async ({ params, request}) => {

    const {slug} = params;
    const post = await getEntry('blog',slug  as any);

    if (!post) {
        return new Response(JSON.stringify({ error: `Post with slug ${slug} not found` }), {
            headers: { "Content-Type": "application/json" },
            status: 404
        });
    }
    return new Response(JSON.stringify(post), {
        headers: { "Content-Type": "application/json" },
        status: 200
    });
}


export const POST:APIRoute = async ({ params, request}) => {
    const body = await request.json();
    
    return new Response(JSON.stringify({method: POST,...body}), {
        headers: { "Content-Type": "application/json" },
        status: 200
    });
}

export const PUT:APIRoute = async ({ params, request}) => {
    const body = await request.json();
    
    return new Response(JSON.stringify({method:PUT,...body}), {
        headers: { "Content-Type": "application/json" },
        status: 200
    });
}


export const PATCH:APIRoute = async ({ params, request}) => {
    const body = await request.json();
    
    return new Response(JSON.stringify({method:PATCH,...body}), {
        headers: { "Content-Type": "application/json" },
        status: 200
    });
}

export const DELETE:APIRoute = async ({ params, request}) => {
    const {slug}  = params;
    
    return new Response(JSON.stringify({method:DELETE,slug}), {
        headers: { "Content-Type": "application/json" },
        status: 200
    });
}