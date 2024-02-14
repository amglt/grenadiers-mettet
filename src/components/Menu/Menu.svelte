<script lang="ts">
	import {
		Hamburger
	} from 'svelte-hamburgers';
	import MenuLink
		from './MenuLink.svelte';

	export let open: boolean;
</script>

<div class="float-right w-auto">
	<div class="lg:hidden"><Hamburger bind:open /></div>
	<div class="clear-both"></div>
</div>

{#if open}
	<div class="text-center text-2xl p-4 pt-0">
		<MenuLink to="/">Home</MenuLink>
	</div>

	<div class="border border-white" />
{/if}