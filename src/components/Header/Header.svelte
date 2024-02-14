<script>
	import Container
		from '../Container/Container.svelte';
	import Logo
		from './Logo.svelte';
	import Menu
		from '../Menu/Menu.svelte';
	import TopTitle
		from './TopTitle.svelte';

	let menuOpen = false;
</script>

<div class="relative h-[438px]">
	<div class="relative w-full z-10">
		<Container classes="h-14">
			{#if !menuOpen}
				<Logo />
			{/if}
			<Menu bind:open={menuOpen} />
			<div class="clear-both"></div>
		</Container>
	</div>
	<TopTitle />
</div>