<script lang="ts">
	import { page } from '$app/stores';

	export let to: string;
	let shouldUnderline: boolean;
	$: {
		const pathname = $page.url.pathname;
		if (pathname === '/' && to === '/') {
			shouldUnderline = true;
		} else shouldUnderline = pathname.startsWith(to);
	}
</script>

<a href={to} class={`my-4 mx-auto hover:underline ${shouldUnderline ? 'underline' : ''}`}>
	<slot />
</a>
