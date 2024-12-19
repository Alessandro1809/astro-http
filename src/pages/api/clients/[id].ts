import type { APIRoute } from "astro";
import { Clients, db, eq } from "astro:db";
export const prerender = false;

export const GET:APIRoute = async ({ params, request}) => {
    const id=params.id;

    const body ={
        method:'GET',
        id
    }

    return new Response(JSON.stringify({...body}
        
    ), {
        
    });
}

export const PATCH:APIRoute = async ({ params, request}) => {
    const clientID=params.id ?? '';
    try {
        const {id,...body} = await request.json();

       const results =await db.update(Clients).set({...body}).where(eq(Clients.id, +clientID));


       const updatedClient = await db.select().from(Clients).where(eq(Clients.id, +clientID));

        return new Response(JSON.stringify({status:201, ...updatedClient.at(0),}), {
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


export const DELETE:APIRoute = async ({ params, request}) => {

    const clientId=params.id ?? '';

    const {rowsAffected}= await  db.delete(Clients).where(eq(Clients.id, +clientId));
    const body ={
        method:'DELETE',
        clientId
    }

    if (rowsAffected > 0) {
        return new Response(JSON.stringify({msg:"Client deleted"}), {
            headers:{"Content-Type":"Application/json"},
        });
        
    }

    return new Response(JSON.stringify({msg:"Missing id or client not found"}), {
        headers:{"Content-Type":"Application/json"},
        status: 404
    });
}

