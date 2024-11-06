
import type { APIRoute } from "astro";

export const GET:APIRoute = async () => {
    const person = {
        name: "John Doe",
        age: 32
    }
    return new Response(
        
        JSON.stringify({ person }),{

        headers: { "Content-Type": "application/json" },
        
        });
}