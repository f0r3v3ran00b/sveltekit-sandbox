<h1>Hello there, I am my a new route.</h1>

<script>
    let dynamicMessage = `I am dynamic`
    let dynamicHtmlMessage = `<h2 style="color: palevioletred">I am a dynamic html message</h2>`
</script>

<h1 class="text-8xl">{dynamicMessage}</h1>
<div>{@html dynamicHtmlMessage}</div>