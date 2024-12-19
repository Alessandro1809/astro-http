
import type { APIRoute } from "astro";
import { Clients, db } from "astro:db";


export const prerender = false;
export const GET:APIRoute = async ({ params, request}) => {

    const users =await db.select().from(Clients);

    return new Response(JSON.stringify({...users }
        
    ), {
        headers:{"Content-Type":"Application/json"}
    });
}

export const POST:APIRoute = async ({ params, request}) => {

    try {
        const {id,...body} = await request.json();


       const {lastInsertRowid} =await db.insert(Clients).values({...body});
    
        

        return new Response(JSON.stringify({status:201, ...body, id:+lastInsertRowid!.toString()}), {
            headers:{
                "Content-Type" :"application/json",
    
            }
            
        });
    } catch (error) {

        return new Response(JSON.stringify({msg: 'no body found in request'}), {
            headers:{
                "Content-Type" :"application/json",
    
            }
            
        });
    }
    
    
   
    
}