<script>
    import '../app.css'
</script>
<style>
a {
    color: coral;
}
</style>

<div style="margin-top: 10%; padding: 5px; text-align: center">
    <a href="/hello" class="text-sky-800">Hello</a> |
    <a href="/resume">Resume</a> |
    <a href="/random-quote">Random Quote</a>
</div>
<div style="background-color: aliceblue; margin: 10% 10%; padding: 5px;">
    <slot></slot>
</div>
