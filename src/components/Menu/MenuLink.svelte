<script lang="ts">
	export let to: string;
</script>

<a href={to} class="my-4 mx-auto hover:underline">
	<slot />
</a>