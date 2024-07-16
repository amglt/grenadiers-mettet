<script>
	import Container
		from '../Container/Container.svelte';
	import Logo
		from './Logo.svelte';
	import TopTitle
		from './TopTitle.svelte';
	import {
		Hamburger
	} from 'svelte-hamburgers';
	import Menu
		from '../Menu/Menu.svelte';

	let open = false;

	$: menuClasses = `desktop:block ${open ? 'block' : 'hidden'}`
</script>

<div class="relative h-[438px]">
	<div class="relative w-full z-10">
		<Container classes="h-14 flex justify-between items-center">
			<div class={menuClasses}><Menu /></div>
			{#if !open}
				<Logo />
			{/if}
			<div class="block desktop:hidden"><Hamburger
				bind:open /></div>
		</Container>
	</div>
	<TopTitle />
</div>