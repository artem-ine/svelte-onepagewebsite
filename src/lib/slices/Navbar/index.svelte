<script>
	/** @type {import("@prismicio/client").Content.NavbarSlice} */
	export let slice;
	import { PrismicLink } from "@prismicio/svelte";
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="nav">
	<PrismicLink field={slice.primary.home} class="ul">home</PrismicLink>
	{#each slice.primary.nav_links as item}
		<PrismicLink field={item.link} class="li">lorem ipsum</PrismicLink>
	{/each}
</section>
