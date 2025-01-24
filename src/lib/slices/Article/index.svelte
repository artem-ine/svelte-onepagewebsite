<script>
	/** @type {import("@prismicio/client").Content.ArticleSlice} */
	export let slice;
	import { PrismicImage } from "@prismicio/svelte";
	import { PrismicRichText } from "@prismicio/svelte";
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="article">
	<div>
		<PrismicImage field={slice.primary.image} class="image"/>
	</div>
	<span class="title">{slice.primary.title}</span>
	<PrismicRichText field={slice.primary.content} class="text"/>
</section>


