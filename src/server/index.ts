

Bun.serve({
    port: 8080,
fetch(_req) {
    return new Response(
        JSON.stringify({ message: 'Hello!' }),
        { headers: { 'Content-Type': 'application/json' } }
    )
},
})


