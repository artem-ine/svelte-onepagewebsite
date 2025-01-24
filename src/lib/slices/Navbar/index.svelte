<script>
	/** @type {import("@prismicio/client").Content.NavbarSlice} */
	export let slice;
	import { PrismicLink } from "@prismicio/svelte/*";
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<PrismicLink field={slice.primary.home}>home</PrismicLink>
	{#each slice.primary.nav_links as item}
		<PrismicLink field={item.link}>lorem ipsum</PrismicLink>
	{/each}
</section>
