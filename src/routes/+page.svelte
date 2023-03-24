<script>
    import { onMount } from "svelte";
    import Worker1 from "./worker1?worker";
    import Worker2 from "./worker2?worker";

    onMount(() => {
        const worker1 = new Worker1();
        worker1.postMessage("Svelte 4 soon ?");
        const worker2 = new Worker2();
        worker2.postMessage(4);
    });
</script>

Oops, broken