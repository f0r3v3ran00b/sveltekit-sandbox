/** @type {import('./$types').RequestHandler} */
export function GET() {
    
    return new Response(JSON.stringify(`message: Hello World`), {status: 201});
}